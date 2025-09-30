// build.js

// --- Helper: Feature check for VR Displays (old WebVR, now deprecated) ---
function supportsGetVRDisplays() {
  return !!navigator.getVRDisplays;
}

// --- 1. Intersect Color Change ---
AFRAME.registerComponent('intersect-color-change', {
  init: function() {
    this.isMouseEnter = false;
    var el = this.el;
    var mat = el.getAttribute('material');
    if (!mat || !mat.color) { return; }
    el.setAttribute('initialColor', mat.color);
    el.addEventListener('mousedown', function() {
      el.setAttribute('material', 'color', '#EF2D5E');
    });
    el.addEventListener('mouseup', function() {
      el.setAttribute('material', 'color',
        this.isMouseEnter ? '#cccccc' : el.getAttribute('initialColor')
      );
    }.bind(this));
    el.addEventListener('mouseenter', function() {
      el.setAttribute('material', 'color', '#cccccc');
      this.isMouseEnter = true;
    }.bind(this));
    el.addEventListener('mouseleave', function() {
      el.setAttribute('material', 'color', el.getAttribute('initialColor'));
      this.isMouseEnter = false;
    }.bind(this));
  }
});

// --- 2. Store Controls ---
AFRAME.registerComponent('store-controls', {
  schema: { hand: { default: 'left' } },
  init: function() {
    this.touchStarted = false;
    this.el.addEventListener('startScale',
      function() { this.touchStarted = true; }.bind(this)
    );
  }
});

// --- 3. Store System ---
AFRAME.registerSystem('store', {
  init: function() {
    var self = this;

    // Input mapping configuration
    var inputMappings = {
      behaviours: {},
      mappings: {
        store: {
          common: { 'grip.down': 'undo', 'trigger.changed': 'select' },
          'vive-controls': {
            'axis.move': 'scale',
            'trackpad.touchstart': 'startScale',
            'menu.down': 'toggleMenu'
          },
          'daydream-controls': {
            'trackpad.changed': 'scale',
            'trackpad.down': 'startScale',
            'menu.down': 'toggleMenu'
          },
          'oculus-touch-controls': {
            'axis.move': 'scale',
            'abutton.down': 'toggleMenu',
            'xbutton.down': 'toggleMenu'
          },
          'windows-motion-controls': {
            'axis.move': 'scale',
            'menu.down': 'toggleMenu'
          }
        }
      }
    };

    // Initial state
    this.pinDetected = false;
    this.pinSelected = false;
    this.colorArr = [6736540, 16406404, 5092817];
    this.currentReality = 'magicWindow';

    // References
    this.meshContainer = document.getElementById('meshContainer');
    this.meshContainerOrigPosition = this.meshContainer ?
      this.meshContainer.getAttribute('position') : { x:0, y:0, z:0 };
    this.reticle = document.querySelector('[reticle]');

    // Bind and register AR events
    if (this.reticle) {
      this.reticle.addEventListener('planeDetected', this.planeDetected.bind(this));
      this.reticle.addEventListener('touched', this.touched.bind(this));
    }
    this.sceneEl.addEventListener('realityChanged', this.realityChanged.bind(this));
    this.sceneEl.addEventListener('xrInitialized', this.xrInitialized.bind(this));

    // UI event binding
    this.addEvents();

    // After scene loaded
    this.sceneEl.addEventListener('loaded', function() {
      if (window.AFRAME && AFRAME.registerInputMappings) {
        AFRAME.registerInputMappings(inputMappings);
      }
      window.AFRAME.currentInputMapping = 'store';
      if (self.flatMaterials) { self.flatMaterials(); }
      if (self.addStorePanel) { self.addStorePanel(); }
    });
  },

  // Called when a surface plane is detected in AR
  planeDetected: function() {
    this.pinDetected = true;
    if (this.reticle) { this.reticle.setAttribute('visible', true); }
  },

  // Called when user taps in AR to place
  touched: function() {
    this.pinSelected = true;
    this.changeReality();
  },

  // Handle WebXR initialization
  xrInitialized: function() {
    // XR is ready
  },

  // Called when reality (magicWindow/ar/vr) changes
  realityChanged: function(e) {
    if (e.detail !== this.currentReality) {
      this.currentReality = e.detail;
      this.changeReality();
    }
  },

  changeReality: function() {
    // Your existing switch-case logic
  },

  addEvents: function() {
    var safeBind = function(id, evt, handler) {
      var el = document.getElementById(id);
      if (!el || !handler) { return; }
      el.addEventListener(evt, handler.bind(this));
    }.bind(this);

    safeBind('thumb0', 'click', this.thumb0Clicked);
    safeBind('thumb1', 'click', this.thumb1Clicked);
    safeBind('thumb2', 'click', this.thumb2Clicked);
    safeBind('shape0', 'click', this.shape0Clicked);
    safeBind('shape1', 'click', this.shape1Clicked);
    safeBind('shape2', 'click', this.shape2Clicked);
    safeBind('color0', 'click', this.color0Clicked);
    safeBind('color1', 'click', this.color1Clicked);
    safeBind('color2', 'click', this.color2Clicked);
    safeBind('buttonCart', 'click', this.buttonCartClicked);
  },

  thumb0Clicked: function() { /* ... */ },
  thumb1Clicked: function() { /* ... */ },
  thumb2Clicked: function() { /* ... */ },
  removeSelected: function() { /* ... */ }
  // Add other handlers as needed
});
