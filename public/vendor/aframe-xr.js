/**
 * Modern A-Frame WebXR Components
 * Compatible with WebXR Device API and A-Frame 1.0+
 */

// ============================================
// XR SYSTEM COMPONENT
// ============================================
AFRAME.registerSystem('xr', {
  schema: {
    arAutostart: { default: true },
    arLightEstimate: { default: true }
  },

  init: function() {
    this.sceneEl.setAttribute('vr-mode-ui', { enabled: false });
    this.bindMethods();
    this.sceneEl.addEventListener('loaded', this.wrapSceneMethods);
    this.lightEstimate = 1;
    this.xrSession = null;
    this.xrRefSpace = null;
  },

  bindMethods: function() {
    this.updateFrame = this.updateFrame.bind(this);
    this.sessionStarted = this.sessionStarted.bind(this);
    this.sessionEnded = this.sessionEnded.bind(this);
    this.wrapSceneMethods = this.wrapSceneMethods.bind(this);
    this.onXRFrame = this.onXRFrame.bind(this);
  },

  wrapSceneMethods: function() {
    const sceneEl = this.sceneEl;
    const system = this;

    // Store original methods
    sceneEl._enterVR = sceneEl.enterVR;
    sceneEl._exitVR = sceneEl.exitVR;
    sceneEl._render = sceneEl.render;

    // Use Object.defineProperty to avoid read-only issues
    Object.defineProperty(sceneEl, 'enterAR', {
      value: async function() {
        if (!navigator.xr) {
          console.warn('WebXR not supported');
          return;
        }
        
        try {
          const session = await navigator.xr.requestSession('immersive-ar', {
            requiredFeatures: ['hit-test', 'local'],
            optionalFeatures: ['light-estimation', 'anchors']
          });
          
          system.setupXRSession(session);
        } catch (error) {
          console.error('Failed to start AR session:', error);
        }
      },
      writable: false,
      configurable: true
    });

    Object.defineProperty(sceneEl, 'exitAR', {
      value: function() {
        if (system.xrSession) {
          system.xrSession.end();
        }
      },
      writable: false,
      configurable: true
    });

    // Override render for AR mode
    sceneEl.render = function() {
      if (system.activeRealityType !== 'ar') {
        sceneEl._render();
      }
    };

    this.activeRealityType = 'magicWindow';
    
    // Wait for camera to be ready
    if (this.el.camera) {
      this.cameraActivated();
    } else {
      this.el.addEventListener('camera-set-active', () => {
        this.cameraActivated();
      });
    }
  },

  cameraActivated: function() {
    this.el.emit('realityChanged', 'magicWindow');
    this.checkXRSupport();
  },

  async checkXRSupport() {
    if (!navigator.xr) {
      console.warn('WebXR not available');
      this.sceneEl.setAttribute('vr-mode-ui', { enabled: true });
      return;
    }

    try {
      const arSupported = await navigator.xr.isSessionSupported('immersive-ar');
      const vrSupported = await navigator.xr.isSessionSupported('immersive-vr');

      this.supportAR = arSupported;
      this.supportVR = vrSupported;

      if (arSupported) {
        this.sceneEl.setAttribute('ar-mode-ui', { enabled: true });
      }
      if (vrSupported) {
        this.sceneEl.setAttribute('vr-mode-ui', { enabled: true });
      }

      this.el.emit('xrInitialized', {
        ar: arSupported,
        vr: vrSupported
      });

    } catch (error) {
      console.error('Error checking XR support:', error);
    }
  },

  setupXRSession: function(session) {
    const sceneEl = this.sceneEl;
    const renderer = sceneEl.renderer;
    
    this.xrSession = session;

    // Set up WebXR rendering
    renderer.xr.enabled = true;
    renderer.xr.setSession(session);

    session.addEventListener('end', this.sessionEnded);

    // Get reference space
    session.requestReferenceSpace('local').then((refSpace) => {
      this.xrRefSpace = refSpace;
      
      // Start render loop
      session.requestAnimationFrame(this.onXRFrame);
      
      this.sessionStarted({ session });
    });
  },

  onXRFrame: function(time, frame) {
    const session = frame.session;
    
    // Continue render loop
    session.requestAnimationFrame(this.onXRFrame);

    // Get pose
    const pose = frame.getViewerPose(this.xrRefSpace);
    if (!pose) return;

    // Emit update event
    this.updateFrame({
      frame,
      pose,
      session
    });

    // Render scene
    const renderer = this.sceneEl.renderer;
    renderer.render(this.sceneEl.object3D, this.sceneEl.camera);
  },

  sessionStarted: function(event) {
    const session = event.session;
    
    this.activeRealityType = 'ar';
    this.el.emit('realityChanged', this.activeRealityType);
    this.el.emit('enter-vr');

    // Make background transparent for AR
    document.documentElement.style.backgroundColor = 'transparent';
    document.body.style.backgroundColor = 'transparent';
  },

  sessionEnded: function(event) {
    this.activeRealityType = 'magicWindow';
    this.xrSession = null;
    this.xrRefSpace = null;
    
    this.el.emit('realityChanged', this.activeRealityType);
    this.el.emit('exit-vr');

    // Restore background
    document.documentElement.style.backgroundColor = '';
    document.body.style.backgroundColor = '';

    const renderer = this.sceneEl.renderer;
    renderer.xr.enabled = false;
  },

  update: function() {
    if (this.data.arLightEstimate) {
      this.lightsArray = this.el.sceneEl.querySelectorAll('[light]');
      
      // Update lights list periodically
      if (this.lightsArrayInterval) {
        clearInterval(this.lightsArrayInterval);
      }
      
      this.lightsArrayInterval = setInterval(() => {
        this.lightsArray = this.el.sceneEl.querySelectorAll('[light]');
      }, 2000);
    } else if (this.lightsArrayInterval) {
      clearInterval(this.lightsArrayInterval);
    }
  },

  updateFrame: function(data) {
    this.el.emit('updateFrame', data);

    // Handle light estimation
    if (data.frame && this.data.arLightEstimate) {
      const lightEstimate = data.frame.lightEstimate;
      
      if (lightEstimate) {
        const intensity = lightEstimate.primaryLightIntensity;
        
        if (intensity && this.lightsArray) {
          this.lightsArray.forEach(lightEl => {
            const light = lightEl.getObject3D('light');
            if (!light) return;

            if (!light.originalIntensity) {
              light.originalIntensity = lightEl.getAttribute('light').intensity || 1;
            }

            lightEl.setAttribute('light', 'intensity', 
              light.originalIntensity * intensity.x);
          });
        }
      }
    }
  }
});

// ============================================
// AR MODE UI COMPONENT
// ============================================
AFRAME.registerComponent('ar-mode-ui', {
  dependencies: ['canvas'],
  
  schema: {
    enabled: { default: true }
  },

  init: function() {
    const sceneEl = this.el;

    // Skip if UI disabled
    if (AFRAME.utils.getUrlParameter('ui') === 'false') {
      return;
    }

    this.bindMethods();
    this.injectStyles();
    this.createButtons();

    sceneEl.addEventListener('enter-vr', this.updateUI);
    sceneEl.addEventListener('exit-vr', this.updateUI);
  },

  bindMethods: function() {
    this.enterAR = this.el.enterAR ? this.el.enterAR.bind(this.el) : () => {
      console.warn('AR not initialized yet');
    };
    this.exitAR = this.el.exitAR ? this.el.exitAR.bind(this.el) : () => {};
    this.updateUI = this.updateUI.bind(this);
  },

  injectStyles: function() {
    if (document.getElementById('ar-mode-styles')) return;

    const style = document.createElement('style');
    style.id = 'ar-mode-styles';
    style.innerHTML = `
      .a-enter-vr {
        text-align: center;
        right: 10px;
      }
      
      .a-enter-ar-button,
      .a-exit-ar-button {
        border: 0;
        bottom: 0;
        cursor: pointer;
        min-width: 50px;
        min-height: 50px;
        padding: 10px;
        transition: background-color 0.05s ease;
        z-index: 9999;
        margin: 10px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.35);
        position: relative;
      }
      
      .a-enter-ar-button:hover,
      .a-exit-ar-button:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
      
      .a-enter-ar-button:active,
      .a-exit-ar-button:active {
        background-color: rgba(0, 0, 0, 0.7);
      }
      
      .a-enter-ar-button::before {
        content: 'AR';
        color: white;
        font-size: 16px;
        font-weight: bold;
        font-family: sans-serif;
      }
      
      .a-exit-ar-button {
        display: none;
      }
      
      .a-exit-ar-button::before {
        content: '✕';
        color: white;
        font-size: 20px;
        font-weight: bold;
      }
      
      .a-hidden {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  },

  createButtons: function() {
    // Create container if it doesn't exist
    let container = document.querySelector('.a-enter-vr');
    if (!container) {
      container = document.createElement('div');
      container.classList.add('a-enter-vr');
      container.setAttribute('aframe-injected', '');
      this.el.appendChild(container);
    }

    // Create Enter AR button
    this.enterARButton = document.createElement('button');
    this.enterARButton.className = 'a-enter-ar-button';
    this.enterARButton.setAttribute('title', 'Enter AR mode');
    this.enterARButton.addEventListener('click', () => {
      this.enterAR();
    });

    // Create Exit AR button
    this.exitARButton = document.createElement('button');
    this.exitARButton.className = 'a-exit-ar-button';
    this.exitARButton.setAttribute('title', 'Exit AR mode');
    this.exitARButton.addEventListener('click', () => {
      this.exitAR();
    });

    container.appendChild(this.enterARButton);
    container.appendChild(this.exitARButton);
  },

  update: function() {
    if (!this.data.enabled || AFRAME.utils.getUrlParameter('ui') === 'false') {
      this.remove();
    }
  },

  remove: function() {
    if (this.enterARButton) {
      this.enterARButton.remove();
    }
    if (this.exitARButton) {
      this.exitARButton.remove();
    }
  },

  updateUI: function() {
    const isInVR = this.el.is('vr-mode');
    
    if (this.enterARButton) {
      this.enterARButton.classList.toggle('a-hidden', isInVR);
    }
    if (this.exitARButton) {
      this.exitARButton.classList.toggle('a-hidden', !isInVR);
      this.exitARButton.style.display = isInVR ? 'inline-block' : 'none';
    }
    if (this.enterARButton) {
      this.enterARButton.style.display = isInVR ? 'none' : 'inline-block';
    }
  }
});

// ============================================
// XR VISIBILITY COMPONENT
// ============================================
AFRAME.registerComponent('xr', {
  schema: {
    vr: { default: true },
    ar: { default: true },
    magicWindow: { default: true }
  },

  init: function() {
    this.realityChanged = this.realityChanged.bind(this);
    this.el.sceneEl.addEventListener('realityChanged', this.realityChanged);
    this.originalVisibility = this.el.getAttribute('visible');
  },

  update: function() {
    this.originalVisibility = this.el.getAttribute('visible');
  },

  realityChanged: function(event) {
    const realityType = event.detail;
    
    if (this.data[realityType] !== undefined) {
      const shouldBeVisible = this.data[realityType] ? 
        this.originalVisibility : false;
      
      this.el.setAttribute('visible', shouldBeVisible);
    }
  }
});

// ============================================
// RETICLE COMPONENT (for AR plane detection)
// ============================================
AFRAME.registerComponent('reticle', {
  schema: {
    hitTestSource: { type: 'string', default: 'viewer' }
  },

  init: function() {
    this.el.setAttribute('visible', false);
    this.el.sceneEl.addEventListener('updateFrame', this.updateFrame.bind(this));
    
    // Rotate reticle to face up
    this.el.setAttribute('rotation', { x: -90, y: 0, z: 0 });
    
    this.hitTestSource = null;
    this.hitTestSourceRequested = false;
    
    this.onTouchStart = this.onTouchStart.bind(this);
    window.addEventListener('touchstart', this.onTouchStart);
  },

  remove: function() {
    window.removeEventListener('touchstart', this.onTouchStart);
  },

  onTouchStart: function(event) {
    if (!event.touches || event.touches.length === 0) return;
    
    const x = event.touches[0].clientX / window.innerWidth;
    const y = event.touches[0].clientY / window.innerHeight;
    
    this.el.emit('select', { x, y, event });
  },

  updateFrame: function(event) {
    const { frame, session } = event.detail;
    if (!frame || !session) return;

    // Request hit test source if not done yet
    if (!this.hitTestSourceRequested) {
      this.requestHitTestSource(session);
      this.hitTestSourceRequested = true;
    }

    // Perform hit test
    if (this.hitTestSource) {
      const hitTestResults = frame.getHitTestResults(this.hitTestSource);
      
      if (hitTestResults.length > 0) {
        const hit = hitTestResults[0];
        const pose = hit.getPose(event.detail.pose.transform);
        
        if (pose) {
          // Show reticle
          if (!this.el.getAttribute('visible')) {
            this.el.setAttribute('visible', true);
            this.el.emit('plane-detected');
          }

          // Update position
          const position = pose.transform.position;
          this.el.setAttribute('position', {
            x: position.x,
            y: position.y,
            z: position.z
          });

          // Update rotation
          const orientation = pose.transform.orientation;
          const quaternion = new THREE.Quaternion(
            orientation.x,
            orientation.y,
            orientation.z,
            orientation.w
          );
          this.el.object3D.quaternion.copy(quaternion);
        }
      }
    }
  },

  async requestHitTestSource(session) {
    try {
      const viewerSpace = await session.requestReferenceSpace('viewer');
      this.hitTestSource = await session.requestHitTestSource({ 
        space: viewerSpace 
      });
    } catch (error) {
      console.warn('Hit test not supported:', error);
    }
  }
});

console.log('A-Frame WebXR components loaded successfully!');