"use client";
import useGetProducts from "@/hooks/useGetProducts";
import * as THREE from "three";
import usePostArFile from "@/hooks/usePostArFile";
import useRoomBound from "@/hooks/useRoomBounds";
import useUploadModel from "@/hooks/useUploadModel";
import useGetArFile from "@/hooks/useGetArFile";
import FurnitureMenu from "@/components/common/FurnitureMenu"
import ControlMenu from "@/components/common/ControlMenu";
import ArViewControl from "@/components/common/ArViewControl";
import MeasurementTool from "@/components/common/MeasurementTool";
import MobileResponsiveControlMenu from '@/components/common/MobileResponsiveControlMenu';
import ResponsiveARView from '@/components/common/ResponsiveARView';
import DimensionsDisplay from '@/components/common/DimensionsDisplay';
import Script from 'next/script';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect, useRef } from "react";
import usePostSaveProjects from "@/hooks/projects/usePostSaveProject";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function Page() {
  useRoomBound();
  const [models, setModels] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)
  const [qrCodeData, setQrCodeData] = useState(null);
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [modelSrc, setModelSrc] = useState(null);
  const [useCustomRoom, setUseCustomRoom] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [cursorPos, setCursorPos] = useState("0 1 0");
  const [menuPosition, setMenuPosition] = useState(null);
  const [modelId, setModelId] = useState(0);
  const furnitureFileInputRef = useRef(null);
  const [showDimensionPopup, setShowDimensionPopup] = useState(false);
  const { data, isLoading, error } = useGetProducts()
  const { mutate } = usePostArFile()
  const [items, setItems] = useState([]);
  const [showMeasurementTool, setShowMeasurementTool] = useState(false);
  const draggingRef = useRef(false);
  const lastTouchRef = useRef({ x: 0, y: 0 });
  const router = useRouter();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 1, z: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showDimensionsDisplay, setShowDimensionsDisplay] = useState(false);
  const wallThickness = 0.5;
  const floorThickness = 0.2;
  const ceilingThickness = 0.2;
  const { mutate: SaveProjects } = usePostSaveProjects();
  const { mutate: uploadModel } = useUploadModel();     // دي خاصة برفع الموديل
  const [arFileUrl, setArFileUrl] = useState(null);
  const { mutate: mutateGetArFile } = useGetArFile();
  const [floorColor, setFloorColor] = useState("#9b7c55");
  const [wallColor, setWallColor] = useState("#b13535");
  const userEmail = localStorage.getItem('userEmail') || '';

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="aframe"]')) {
      const script = document.createElement('script');
      script.src = 'https://aframe.io/releases/1.4.2/aframe.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  useEffect(() => {
    const savedFloor = localStorage.getItem("floorColor");
    const savedWall = localStorage.getItem("wallColor");
   

    if (savedFloor) setFloorColor(savedFloor);
    if (savedWall) setWallColor(savedWall);
  }, []);
  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);
  const handleColorChange = (type, value) => {
    if (type === "floor") {
      setFloorColor(value);
      localStorage.setItem("floorColor", value);
    } else if (type === "wall") {
      setWallColor(value);
      localStorage.setItem("wallColor", value);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }
  }, []);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     import('aframe').catch(console.error);
  //   }
  // }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="aframe"]')) {
      const script = document.createElement('script');
      script.src = 'https://aframe.io/releases/1.4.2/aframe.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AFRAME &&
      !AFRAME.components['custom-touch-look-controls']) {
      AFRAME.registerComponent('custom-touch-look-controls', {
        schema: { enabled: { default: true } },
        init: function () {
          this.touchStart = null;
          this.rotation = { x: 0, y: 0 };
          this.handleTouchStart = this.handleTouchStart.bind(this);
          this.handleTouchMove = this.handleTouchMove.bind(this);
          this.handleTouchEnd = this.handleTouchEnd.bind(this);
        },
        play: function () {
          this.el.sceneEl.canvas.addEventListener('touchstart', this.handleTouchStart);
          this.el.sceneEl.canvas.addEventListener('touchmove', this.handleTouchMove);
          this.el.sceneEl.canvas.addEventListener('touchend', this.handleTouchEnd);
        },
        pause: function () {
          this.el.sceneEl.canvas.removeEventListener('touchstart', this.handleTouchStart);
          this.el.sceneEl.canvas.removeEventListener('touchmove', this.handleTouchMove);
          this.el.sceneEl.canvas.removeEventListener('touchend', this.handleTouchEnd);
        },
        handleTouchStart: function (e) {
          if (e.touches.length === 1) {
            this.touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }
        },
        handleTouchMove: function (e) {
          if (!this.touchStart || e.touches.length !== 1) return;
          const touch = e.touches[0];
          const deltaX = touch.clientX - this.touchStart.x;
          const deltaY = touch.clientY - this.touchStart.y;
          this.rotation.y -= deltaX * 0.002;
          this.rotation.x -= deltaY * 0.002;
          this.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.rotation.x));
          this.el.object3D.rotation.set(this.rotation.x, this.rotation.y, 0);
          this.touchStart = { x: touch.clientX, y: touch.clientY };
        },
        handleTouchEnd: function () {
          this.touchStart = null;
        }
      });
    }
  }, []);
  async function getRoomDimensions(src) {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        src,
        function (gltf) {
          const model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const width = box.max.x - box.min.x;
          const depth = box.max.z - box.min.z;
          const height = box.max.y - box.min.y;
          const wallThickness = 0.5;
          const floorThickness = 0.2;
          const ceilingThickness = 0.2;
          const internalWidth = width - 2 * wallThickness;
          const internalDepth = depth - 2 * wallThickness;
          resolve({
            minX: box.min.x,
            maxX: box.max.x,
            minZ: box.min.z,
            maxZ: box.max.z,
            internalWidth,
            internalDepth,
            internalHeight: height - floorThickness - ceilingThickness,
          });
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error("An error happened:", error);
          reject(error);
        }
      );
    });
  }

  useEffect(() => {
    const isCustomRoom = localStorage.getItem("useCustomRoom") === "true";
    const savedModelSrc = localStorage.getItem("modelSrc");

    if (isCustomRoom) {

      window.roomBounds = {
        minX: -6,
        maxX: 6,
        minZ: -3,
        maxZ: 3,
        internalWidth: 11,
        internalDepth: 11,
        internalHeight: 3.1,
      };


      console.log("🧱 Custom room bounds set manually:", window.roomBounds);
      return;
    }
    0
    if (savedModelSrc) {
      setModelSrc(savedModelSrc);

      // استدعاء getRoomDimensions بعد تحميل modelSrc
      getRoomDimensions(savedModelSrc)
        .then((dimensions) => {
          window.roomBounds = dimensions;
          console.log("📐 Room bounds loaded:", window.roomBounds);
        })
        .catch((error) => {
          console.error("❌ Failed to get room dimensions:", error);
        });
    }
  }, []);

  const handleAddItem = (itemSrc) => {
    const model = {
      id: modelId.toString(),
      src: itemSrc,
      position: cursorPos,
      scale: "1 1 1",
      rotation: "0 0 0",
    };
    setModels([...models, model]);
    setSelectedModelId(null);
    setMenuPosition(null);
    setShowDimensionPopup(false);
    setShowMenu(false);
    setModelId(modelId + 1);
  };
  const handleAddToFurnitureList = (newItem) => {
    console.log("✅ New item added", newItem); // شوفِ اسمه هنا
    setItems((prev) => [...prev, newItem]);
  };



  const handleRemoveItem = (id) => {
    const newModels = models.filter((model) => model.id !== id);
    setModels(newModels);
    setSelectedModelId(null);
    setMenuPosition(null);
    setShowDimensionPopup(false);
    setShowMenu(false);
  };

  const handleRotateItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentRotation = AFRAME.utils.coordinates.parse(model.rotation || "0 0 0");
        const newRotation = {
          ...currentRotation,
          y: currentRotation.y + (direction === "left" ? -45 : 45),
        };
        return {
          ...model,
          rotation: AFRAME.utils.coordinates.stringify(newRotation),
        };
      }
      return model;
    });
    setModels(newModels);
  };

const handleMoveItem = async (id, direction) => {
  try {
    const modelEl = document.getElementById(id);
    if (!modelEl || typeof modelEl.getObject3D !== "function") {
      console.error(`Model with id ${id} not found or does not support getObject3D.`);
      return;
    }
    if (!modelSrc) {
      console.error("Room model source not set.");
      return;
    }

    // استدعي getRoomDimensions مع مصدر النموذج
    const internalRoomBounds = await getRoomDimensions(modelSrc);
    if (!internalRoomBounds) return;

    if (!modelEl.dataset.initialY) {
      modelEl.dataset.initialY = modelEl.object3D.position.y;
    }

    const wallThickness = 0.5; // تعريف ثابت هنا أو استورده من مكان مركزي

    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentPosition = model.position.split(" ").map(Number);
        let newPosition = { x: currentPosition[0], y: currentPosition[1], z: currentPosition[2] };
        switch (direction) {
          case "forward":
            newPosition.z -= 0.5;
            break;
          case "backward":
            newPosition.z += 0.5;
            break;
          case "left":
            newPosition.x -= 0.5;
            break;
          case "right":
            newPosition.x += 0.5;
            break;
          default:
            break;
        }
        const mesh = modelEl.getObject3D("mesh");
        if (!mesh) return model;
        const box = new THREE.Box3().setFromObject(mesh);
        const halfWidth = (box.max.x - box.min.x) / 2;
        const halfDepth = (box.max.z - box.min.z) / 2;
        newPosition.x = Math.min(
          Math.max(newPosition.x, internalRoomBounds.minX + halfWidth),
          internalRoomBounds.maxX - halfWidth
        );
        newPosition.z = Math.min(
          Math.max(newPosition.z, internalRoomBounds.minZ + wallThickness + halfDepth),
          internalRoomBounds.maxZ - halfDepth
        );
        newPosition.y = parseFloat(modelEl.dataset.initialY);
        return { ...model, position: `${newPosition.x} ${newPosition.y} ${newPosition.z}` };
      }
      return model;
    });
    setModels(newModels);
  } catch (error) {
    console.error("Error moving item:", error);
  }
};

  const handleScaleItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentScale = AFRAME.utils.coordinates.parse(model.scale);
        const scaleFactor = direction === "increase" ? 1.1 : 0.9;
        const newScale = {
          x: Math.min(1.8, Math.max(0.8, currentScale.x * scaleFactor)),
          y: Math.min(1.8, Math.max(0.8, currentScale.y * scaleFactor)),
          z: Math.min(1.8, Math.max(0.8, currentScale.z * scaleFactor)),
        };
        return { ...model, scale: AFRAME.utils.coordinates.stringify(newScale) };
      }
      return model;
    });
    setModels(newModels);
  };

  const handleDuplicateItem = () => {
    const selectedItem = models.find((model) => model.id === selectedModelId);
    if (selectedItem) {
      const newModel = { ...selectedItem, id: modelId.toString() };
      const currentPosition = selectedItem.position.split(" ").map(Number);
      const newPosition = `${currentPosition[0] + 1} ${currentPosition[1]} ${currentPosition[2]}`;
      newModel.position = newPosition;
      setModels([...models, newModel]);
      setSelectedModelId(newModel.id);
      setModelId(modelId + 1);
    }
  };
  // When the Dimensions button is clicked, activate the popup and add the bounding-box-helper.
  const handleShowDimensions = (id) => {
    setShowDimensionsDisplay(true);
  };

  const handleCloseDimensions = () => {
    setShowDimensionsDisplay(false);
    models.forEach((model) => {
      const modelEl = document.getElementById(model.id);
      if (modelEl && modelEl.hasAttribute("bounding-box-helper")) {
        modelEl.removeAttribute("bounding-box-helper");
      }
    });
  };
  const handleFloorClick = (evt) => {
    let point = null;
    if (evt.detail && evt.detail.intersection) {
      point = evt.detail.intersection.point;
    } else {
      const mouse = new THREE.Vector2();
      mouse.x = (evt.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1;
      const sceneEl = document.querySelector("a-scene");
      const camera = sceneEl.camera;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      point = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, point);
    }
    if (point) {
      const newPos = `${point.x.toFixed(2)} ${point.y.toFixed(2)} ${point.z.toFixed(2)}`;
      setCursorPos(newPos);
    }
    setSelectedModelId(null);
    setMenuPosition(null);
    setShowDimensionPopup(false);
    setShowMenu(false);
  };

  useEffect(() => {
    const sceneEl = document.querySelector("a-scene");
    if (sceneEl) {
      sceneEl.addEventListener("click", handleFloorClick);
    }
    return () => {
      if (sceneEl) {
        sceneEl.removeEventListener("click", handleFloorClick);
      }
    };
  }, []);

  if (typeof AFRAME !== "undefined") {
    if (!AFRAME.components["drag-drop"]) {
      AFRAME.registerComponent("drag-drop", {
        schema: {},
        init: function () {
          this.dragging = false;
          this.offset = new AFRAME.THREE.Vector3();
          this.cameraEl = null;

          // حفظ مقياس العنصر الأصلي
          this.originalScale = {
            x: this.el.object3D.scale.x,
            y: this.el.object3D.scale.y,
            z: this.el.object3D.scale.z,
          };

          // قيمة إزاحة أسفل العنصر (حسب الباوندينغ بوكس)
          this.initialBottomOffset = 0;

          // ربط الدوال عشان نستخدمها كـ event handlers
          this.onMouseDown = this.onMouseDown.bind(this);
          this.onMouseMove = this.onMouseMove.bind(this);
          this.onMouseUp = this.onMouseUp.bind(this);
          this.onTouchStart = this.onTouchStart.bind(this);
          this.onTouchMove = this.onTouchMove.bind(this);
          this.onTouchEnd = this.onTouchEnd.bind(this);

          // إضافة أحداث الماوس واللمس
          this.el.addEventListener("mousedown", this.onMouseDown);
          this.el.addEventListener("touchstart", this.onTouchStart);
        },

        // بداية سحب بالماوس
        onMouseDown: function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          this.startDrag(evt.detail ? evt.detail.intersection : null);
          window.addEventListener("mousemove", this.onMouseMove);
          window.addEventListener("mouseup", this.onMouseUp);
        },

        // بداية سحب باللمس
        onTouchStart: function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          // في اللمس ممكن يكون evt.touches[0]
          this.startDrag(evt.detail ? evt.detail.intersection : null);
          window.addEventListener("touchmove", this.onTouchMove, { passive: false });
          window.addEventListener("touchend", this.onTouchEnd);
        },

        // توحيد بداية السحب (للمس والماوس)
        startDrag: function (intersection) {
          this.dragging = true;
          this.originalScale = {
            x: this.el.object3D.scale.x,
            y: this.el.object3D.scale.y,
            z: this.el.object3D.scale.z,
          };
          this.cameraEl = this.el.sceneEl.querySelector("[camera]");
          if (this.cameraEl && this.cameraEl.components["look-controls"]) {
            this.cameraEl.components["look-controls"].pause();
          }
          if (intersection) {
            this.offset.copy(this.el.object3D.position).sub(intersection.point);
            this.offset.y = 0;
          } else {
            this.offset.set(0, 0, 0);
          }
          const mesh = this.el.getObject3D("mesh");
          if (mesh) {
            const bbox = new AFRAME.THREE.Box3().setFromObject(this.el.object3D);
            this.initialBottomOffset = this.el.object3D.position.y - bbox.min.y;
          } else {
            this.initialBottomOffset = 0;
          }
        },

        // تحريك بالماوس
        onMouseMove: function (evt) {
          if (!this.dragging) return;
          evt.preventDefault();
          this.handleDragMove(evt.clientX, evt.clientY);
        },

        // تحريك باللمس
        onTouchMove: function (evt) {
          if (!this.dragging) return;
          evt.preventDefault();
          // نستخدم أول لمسة
          const touch = evt.touches[0];
          this.handleDragMove(touch.clientX, touch.clientY);
        },

        // التعامل مع الحركة موحدة
        handleDragMove: function (clientX, clientY) {
          const mouse = new AFRAME.THREE.Vector2();
          mouse.x = (clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(clientY / window.innerHeight) * 2 + 1;

          const camera = this.el.sceneEl.camera;
          const raycaster = new AFRAME.THREE.Raycaster();
          raycaster.setFromCamera(mouse, camera);

          let intersectionPoint = null;
          const floorEl = document.getElementById("floor");
          if (floorEl) {
            const intersects = raycaster.intersectObject(floorEl.object3D, true);
            if (intersects.length > 0) {
              intersectionPoint = intersects[0].point;
            }
          }
          if (!intersectionPoint) {
            const plane = new AFRAME.THREE.Plane(new AFRAME.THREE.Vector3(0, 1, 0), 0);
            intersectionPoint = new AFRAME.THREE.Vector3();
            if (raycaster.ray.intersectPlane(plane, intersectionPoint) === null) return;
          }

          const targetPos = intersectionPoint.clone().add(this.offset);

          // تطبيق حدود الغرفة (لو موجودة)
          if (window.roomBounds) {
            const box = new AFRAME.THREE.Box3().setFromObject(this.el.object3D);
            const halfWidth = (box.max.x - box.min.x) / 2;
            const halfDepth = (box.max.z - box.min.z) / 2;
            const wallThickness = 0.5;
            const backMargin = 0.2;

            targetPos.x = Math.min(
              Math.max(targetPos.x, window.roomBounds.minX + halfWidth),
              window.roomBounds.maxX - halfWidth
            );
            targetPos.z = Math.min(
              Math.max(targetPos.z, window.roomBounds.minZ + wallThickness + halfDepth + backMargin),
              window.roomBounds.maxZ - halfDepth
            );
          } else {
            // حدود أمان افتراضية
            const safeBoundary = 3.5;
            targetPos.x = Math.max(-safeBoundary, Math.min(targetPos.x, safeBoundary));
            targetPos.z = Math.max(-safeBoundary, Math.min(targetPos.z, safeBoundary));
          }

          // ثبّت الارتفاع y (عشان العنصر على الأرض)
          targetPos.y = this.el.object3D.position.y;

          this.el.setAttribute("position", `${targetPos.x} ${targetPos.y} ${targetPos.z}`);

          // ارجع مقياس العنصر الأصلي
          this.el.object3D.scale.set(
            this.originalScale.x,
            this.originalScale.y,
            this.originalScale.z
          );
        },

        // نهاية سحب الماوس
        onMouseUp: function (evt) {
          this.endDrag();
          window.removeEventListener("mousemove", this.onMouseMove);
          window.removeEventListener("mouseup", this.onMouseUp);
        },

        // نهاية سحب اللمس
        onTouchEnd: function (evt) {
          this.endDrag();
          window.removeEventListener("touchmove", this.onTouchMove);
          window.removeEventListener("touchend", this.onTouchEnd);
        },

        // توحيد نهاية السحب
        endDrag: function () {
          this.dragging = false;
          if (this.cameraEl && this.cameraEl.components["look-controls"]) {
            this.cameraEl.components["look-controls"].play();
          }
        },

        // تنظيف الحدث
        remove: function () {
          this.el.removeEventListener("mousedown", this.onMouseDown);
          this.el.removeEventListener("touchstart", this.onTouchStart);
          window.removeEventListener("mousemove", this.onMouseMove);
          window.removeEventListener("mouseup", this.onMouseUp);
          window.removeEventListener("touchmove", this.onTouchMove);
          window.removeEventListener("touchend", this.onTouchEnd);
        },
      });

    }

    // Updated bounding-box-helper using THREE.Box3Helper
    if (!AFRAME.components["bounding-box-helper"]) {
      AFRAME.registerComponent("bounding-box-helper", {
        schema: {
          // Default color set to bastel green.
          color: { type: "color", default: "#4CAF50" },
        },
        init: function () {
          // Create a Box3 to compute the object's bounding box.
          this.box = new THREE.Box3();
          // Create a Box3Helper that visualizes the computed box.
          this.helper = new THREE.Box3Helper(this.box, this.data.color);
          this.el.sceneEl.object3D.add(this.helper);
        },
        tick: function () {
          if (this.helper) {
            // Ensure the object's world matrices are up-to-date.
            this.el.object3D.updateMatrixWorld(true);
            // Recompute the bounding box.
            this.box.setFromObject(this.el.object3D);
            // Display helper as long as the box is not empty.
            this.helper.visible = !this.box.isEmpty();
          }
        },
        remove: function () {
          if (this.helper) {
            this.el.sceneEl.object3D.remove(this.helper);
            this.helper = null;
          }
        },
      });
    }
  }

  const handleModelClick = (evt, model) => {
    evt.stopPropagation();
    setSelectedModelId(model.id);
    setMenuPosition({ x: 0, y: 0 });
    setShowDimensionPopup(false);
    setShowMenu(true);

    const src = model.src;
    const matchedItem = data.find((item) =>
      src.includes(item.name) || src === item.arFileUrl
    );
    if (matchedItem) {
      setSelectedItem(matchedItem);
      console.log("✅ Selected Item Set:", matchedItem);
    } else {
      console.warn("❌ No matching item found for:", src);
    }
  };

  const handleFurnitureButtonClick = () => {
    if (furnitureFileInputRef.current) {
      furnitureFileInputRef.current.click();
    }
  };

  const handleFurnitureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const model = {
        id: modelId.toString(),
        src: url,
        position: cursorPos,
        scale: "1 1 1",
        rotation: "0 0 0",
      };
      setModels([...models, model]);
      setModelId(modelId + 1);

      uploadModel(file, {
        onSuccess: (data) => {
          console.log("Model uploaded successfully:", data.arFileUrl);
          toast.success("odel uploaded successfully", { duration: 3000 });
          setModels((prevModels) =>
            prevModels.map((m) =>
              m.id === model.id ? { ...m, src: data.arFileUrl } : m
            )
          );
        },
        onError: (error) => {
          console.error("Upload failed:", error);
          toast.error("Upload failed:");
        },
        onSettled: () => {
          // مهما كانت النتيجة، نفضي قيمة input عشان يسمح بإعادة الرفع
          event.target.value = "";
        },
      });
    }
  };

  const handleArViewClick = (modelIdOrName) => {
    mutateGetArFile(modelIdOrName, {
      onSuccess: (data) => {
        // مثلاً في الرد data.arFileUrl
        setArFileUrl(data?.arFileUrl);
        setShowMenu(false);  // ممكن تخفي المينيو لو حابة
      },
      onError: (error) => {
        console.error("Error fetching AR file:", error);
        toast.error("فشل تحميل ملف الواقع المعزز.");
      }
    });
  };


  useEffect(() => {
    const savedModelSrc = localStorage.getItem("modelSrc");
    if (savedModelSrc) {
      setModelSrc(savedModelSrc);
    }

  }, []);

  useEffect(() => {
    const modelSrc = localStorage.getItem("modelSrc");
    const isCustom = localStorage.getItem("useCustomRoom") === "true";

    setUseCustomRoom(isCustom);
    if (modelSrc && !isCustom) {
      setModelSrc(modelSrc);
    }
  }, []);
  // Ensure that the model is positioned above the ground.
  const enforceAboveGround = (modelEl) => {
    if (!modelEl) return;
    const mesh = modelEl.getObject3D("mesh");
    if (!mesh) return;
    const box = new THREE.Box3().setFromObject(mesh);
    let floorY = 0;
    let groundHeight = 0.144896;
    if (!modelEl.dataset.initialized) {
      modelEl.dataset.initialMinY = box.min.y;
      modelEl.dataset.initialScaleY = modelEl.object3D.scale.y;
      modelEl.dataset.initialized = "true";
    }
    const initialMinY = parseFloat(modelEl.dataset.initialMinY);
    const initialScaleY = parseFloat(modelEl.dataset.initialScaleY);
    let scaleFactor = modelEl.object3D.scale.y / initialScaleY;
    let adjustedMinY = initialMinY * scaleFactor;
    modelEl.object3D.position.y += floorY + groundHeight - adjustedMinY;
  };

  useEffect(() => {
    models.forEach((model) => {
      const modelEl = document.getElementById(model.id);
      if (modelEl && !modelEl.getAttribute("position-adjusted")) {
        modelEl.addEventListener("model-loaded", () => {
          enforceAboveGround(modelEl);
          modelEl.setAttribute("position-adjusted", "true");
        });
        modelEl.addEventListener("scale-changed", () => {
          enforceAboveGround(modelEl);
        });
      }
    });
  }, [models]);
const handleDesktopScreenshot = () => {
  const sceneEl = document.querySelector("a-scene");
  const canvas = sceneEl?.renderer?.domElement;

  if (!sceneEl || !sceneEl.renderer || !sceneEl.camera || !canvas) {
  
    toast.error(" Scene or renderer not ready.");
    return;
  }

  sceneEl.renderer.render(sceneEl.object3D, sceneEl.camera);
  const base64Image = canvas.toDataURL("image/png");

  if (!base64Image?.startsWith("data:image")) {
    console.error("Invalid image");
    toast.error("Invalid image");
    return;
  }

  SaveProjects(
    {
      image: base64Image,
      userEmail,
    },
    {
      onSuccess: () => {
        console.log(" Uploaded successfully");
        toast.success("Uploaded successfully");
        router.push("/projects");
      },
      onError: (err) => {
        console.error(" Upload error:", err);
        toast.error("Upload error");
      },
    }
  );
};

//  دالة الموبايل الطويلة اللي عندك (حافظنا على اسمها)
const handleMobileScreenshot = async () => {
  try {
    const sceneEl = document.querySelector("a-scene");
    if (!sceneEl) {
      console.error("❌ No scene found.");
      toast.error("لم يتم العثور على المشهد");
      return;
    }

    if (!sceneEl.hasLoaded) {
      await new Promise((resolve) => {
        sceneEl.addEventListener("loaded", resolve, { once: true });
      });
    }

    let canvas = null;
    let retryCount = 0;
    const maxRetries = 10;

    while (!canvas && retryCount < maxRetries) {
      canvas = sceneEl.canvas ||
               sceneEl.renderer?.domElement ||
               document.querySelector("canvas.a-canvas") ||
               document.querySelector("canvas[data-aframe-canvas]") ||
               document.querySelector("canvas");

      if (!canvas) {
        await new Promise(resolve => setTimeout(resolve, 200));
        retryCount++;
      }
    }

    if (!canvas || typeof canvas.toDataURL !== "function") {
      toast.error("تعذر الحصول على الصورة");
      return;
    }

    if (isMobile && sceneEl.renderer) {
      sceneEl.renderer.render(sceneEl.object3D, sceneEl.camera);
    }

    let base64Image;
    try {
      base64Image = canvas.toDataURL("image/png", 1.0);
    } catch {
      try {
        base64Image = canvas.toDataURL("image/jpeg", 0.9);
      } catch (jpegError) {
        toast.error("فشل في التقاط الصورة");
        return;
      }
    }

    if (!base64Image || !base64Image.startsWith("data:image")) {
      toast.error("بيانات الصورة غير صالحة");
      return;
    }

    SaveProjects(
      {
        image: base64Image,
        userEmail,
      },
      {
        onSuccess: () => {
         
        toast.success("Uploaded successfully");
          router.push("/projects");
        },
        onError: () => {
          toast.error("Upload error");
        },
      }
    );

  } catch (error) {
    toast.error("حدث خطأ غير متوقع");
  }
};

// ✅ دالة موحدة تستدعي الصح حسب الجهاز
const handleSaveScreenshot = () => {
  if (isMobile) {
    handleMobileScreenshot();
  } else {
    handleDesktopScreenshot();
  }
};

  return (
    <ResponsiveARView
      furnitureMenu={
        <FurnitureMenu
          items={items}
          onAddItem={handleAddItem}
          onUploadClick={handleFurnitureButtonClick}
          furnitureFileInputRef={furnitureFileInputRef}
          handleFurnitureUpload={handleFurnitureUpload}
          mutate={mutate}
          setSelectedItem={setSelectedItem}
          onAdd={handleAddToFurnitureList}

        />
      }
      controlMenu={
        showMenu && selectedModelId && menuPosition && (
          <>
            {/* Desktop menu: */}
            {(!isMobile) && (
              <div className="absolute top-4 right-4 z-10">
                <ControlMenu
                  showDimensionPopup={showDimensionPopup}
                  position={menuPosition}
                  onRotate={(dir) => handleRotateItem(selectedModelId, dir)}
                  onScale={(dir) => handleScaleItem(selectedModelId, dir)}
                  onDuplicate={handleDuplicateItem}
                  onDelete={() => handleRemoveItem(selectedModelId)}
                  handleShowDimensions={() => handleShowDimensions(selectedModelId)}
                  selectedModelId={selectedModelId}
                  selectedItem={selectedItem}
                  items={data}
                  mutate={mutate}
                  setMenuPosition={setMenuPosition}
                  setQrCodeData={setQrCodeData}
                  setShowQRPopup={setShowQRPopup}
                  setShowMenu={setShowMenu}
                  mutateGetArFile={mutateGetArFile}
                />
              </div>
            )}
            <ArViewControl
              selectedModelId={selectedModelId}
              onArViewClick={() => handleArViewClick(selectedModelId)}
            />

            {/* Mobile menu: */}
            {isMobile && (
              <div className="block md:hidden">
                <MobileResponsiveControlMenu
                  showDimensionPopup={showDimensionPopup}
                  position={menuPosition}
                  onRotate={(dir) => handleRotateItem(selectedModelId, dir)}
                  onMove={(dir) => handleMoveItem(selectedModelId, dir)}
                  onScale={(dir) => handleScaleItem(selectedModelId, dir)}
                  onDuplicate={handleDuplicateItem}
                  onDelete={() => handleRemoveItem(selectedModelId)}
                  handleShowDimensions={() => handleShowDimensions(selectedModelId)}
                  selectedModelId={selectedModelId}
                  selectedItem={selectedItem}
                  items={data}
                  mutate={mutate}
                  setMenuPosition={setMenuPosition}
                  setQrCodeData={setQrCodeData}
                  setShowQRPopup={setShowQRPopup}
                  mutateGetArFile={mutateGetArFile}
                // setShowMenu={setShowMenu}
                />
              </div>
            )}
          </>
        )
      }

      measurementButton={
        <>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white rounded-2xl shadow-lg p-4 w-fit mb-6">

            {/* ✅ Color Pickers فقط لو في Custom Room */}
            {useCustomRoom && (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">Floor:</span>
                  <input
                    type="color"
                    value={floorColor}
                    onChange={(e) => handleColorChange("floor", e.target.value)}
                    className="w-10 h-10 rounded-md border border-gray-300 shadow-sm cursor-pointer"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">Wall:</span>
                  <input
                    type="color"
                    value={wallColor}
                    onChange={(e) => handleColorChange("wall", e.target.value)}
                    className="w-10 h-10 rounded-md border border-gray-300 shadow-sm cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* 🛠️ Action Buttons */}
            <div className="flex items-center gap-3 mt-3 md:mt-0">
              <button
                onClick={() => setShowMeasurementTool(!showMeasurementTool)}
                className={`w-10 h-10 flex items-center justify-center text-lg rounded-full transition-colors duration-300 border shadow 
        ${showMeasurementTool
                    ? 'bg-mainbackground text-white border-mainbackground'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                  }`}
                title="Toggle Measurement Tool"
              >
                📏
              </button>

              <button
                onClick={handleSaveScreenshot}
                className="w-10 h-10 flex items-center justify-center text-lg rounded-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 shadow"
                title="Save Screenshot"
              >
                💾
              </button>
            </div>

          </div>

        </>
      }
    >
      {/* 🟡 دا المشهد الرئيسي جوا ResponsiveARView */}
      {/* {modelSrc ? (
        <a-scene embedded physics className="w-full h-full rounded-lg shadow-lg">
          {/* المشهد والموديلات */}
      {/* <a-entity gltf-model={modelSrc} position="0 0 0" scale="1 1 1" static-body /> */}
      {/* اضاءه  */}
      {/* <a-entity light="type: ambient; color: #fff; intensity: 1"></a-entity>
          <a-entity light="type: directional; color: #fff; intensity: 0.5" position="1 3 1"></a-entity> */}
      {/* {<a-plane
            id="floor"
            position="0 0 0"
            rotation="-90 0 0"
            width="10"
            height="10"
            opacity="0"
            material="transparent: true"
            class="clickable-floor"
          ></a-plane> */}


      {/* {models.map((model) => (
            <a-entity
              drag-drop
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              rotation={model.rotation}
              scale={model.scale}
              id={model.id}
              className="clickable-item"
              onClick={(evt) => handleModelClick(evt, model)}
            // onTouchStart={handleTouchStart}
            // onTouchMove={handleTouchMove}
            // onTouchEnd={handleTouchEnd}
            />
          ))} */}
      {/* <Script src="https://unpkg.com/aframe-joystick-controls@4.0.1/dist/aframe-joystick-controls.min.js" /> */}

      {/* <a-entity
            id="rig"
            movement-controls="enabled: true; fly: false"
            joystick-controls="mode: joystick; joySticky: true"
            position="0 1.6 4"
          >
            {isMobile ? (

              <a-camera
                position="0 0 0"
                custom-touch-look-controls
                look-controls="enabled: false"
                wasd-controls="enabled: false"
              >
                <a-cursor
                  rayOrigin="entity"
                  raycaster="objects: .clickable-item, .clickable-floor"
                  fuse="false"
                  material="color: red"
                  position="0 0 -1.5"
                  scale="2 2 2"
                ></a-cursor>
              </a-camera>

            ) : (

              <a-camera
                position="0 0 0"
                scale="2 2 2"
                look-controls="touchEnabled: true; reverseTouchDrag: false; enabled: true; sensitivity: 0.1"
                wasd-controls="enabled: true"
              >
                <a-cursor
                  rayOrigin="entity"
                  raycaster="objects: .clickable-item, .clickable-floor"
                  material="color: red"
                  fuse="false"
                  position="0 0 -1.5"
                  scale="2 2 2"
                ></a-cursor>
              </a-camera>

            )}
          </a-entity> */}


      {/* </a-scene> */}
      {/* ) : (
        <img src="/main2Home.jpg" alt="Main Furniture" className="w-full h-full object-cover" />
      )} */}
      {useCustomRoom ? (
        <a-scene embedded physics="debug: false" className="w-full h-full rounded-lg shadow-lg">
          {/* 🟡 إضاءة ناعمة وواقعية */}

          <a-entity light="type: ambient; color: #ffffff; intensity: 0.5"></a-entity>

          <a-entity
            light="type: point; intensity: 0.4; distance: 8"
            position="0 2 -1"
          ></a-entity>
          <a-entity
            light="type: directional; color: #ffffff; intensity: 0.6"
            position="6 10 6"
            shadow="cast: true"
          ></a-entity>



          {/* 🟩 أرضية كبيرة واقعية */}
          <a-plane
            id="floor"
            position="0 0 0"
            rotation="-90 0 0"
            width="12"
            height="12"
            color={floorColor || "#d2b48c"}
            material="roughness: 1; metalness: 0"
            class="clickable-floor"
          ></a-plane>

          {/* 🧱 جدران 12×12 × 3.2 ارتفاع*/}
          <a-box position="-6 1.6 0" depth="12" height="3.2" width="0.1" color={wallColor || "#eeeeee"}></a-box>
          {/* 🪟 شباك في الحيطة اليسار */}

          <a-box position="6 1.6 0" depth="12" height="3.2" width="0.1" color={wallColor || "#eeeeee"}></a-box>


          <a-box position="0 1.6 -6" width="12" height="3.2" depth="0.1" color={wallColor || "#eeeeee"}></a-box>
          <a-box position="0 1.6 6" width="12" height="3.2" depth="0.1" color={wallColor || "#eeeeee"}></a-box>
          <a-entity
            gltf-model="/window.glb"
            position="5.95 1 0"
            rotation="0 0 0"
            scale="0.001 0.02 0.02"
          />


          <a-entity
            gltf-model="/window3.glb"
            position="-4.8 1 0"
            rotation="0 0 0"
            scale="0.2 0.2 0.5"
          />
          <a-entity
            gltf-model="/door2.glb"
            position="1 0 -5.9"
            rotation="0 0 0"
            scale="0.01 0.01 0.01"
          />

          {/* 🌫️ سقف */}
          <a-box position="0 3.2 0" width="12" depth="12" height="0.1" color="#f5f5f5"></a-box>

          {/* 🪑 الموديلات */}
          {models.map((model) => (
            <a-entity
              drag-drop
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              rotation={model.rotation}
              scale={model.scale}
              id={model.id}
              className="clickable-item"
              onClick={(evt) => handleModelClick(evt, model)}
            />
          ))}

          {/* 🎮 الكاميرا */}
          <a-entity
            id="rig"
            movement-controls="enabled: true; fly: false; speed: 0.2"
            joystick-controls="mode: joystick; joySticky: true"
            position="0 1.6 5"
          >
            <a-camera
              position="0 0 0"
              look-controls="touchEnabled: true; reverseTouchDrag: false; enabled: true"
              wasd-controls="enabled: true; acceleration: 120"
            >
              <a-cursor
                rayOrigin="entity"
                raycaster="objects: .clickable-item, .clickable-floor"
                fuse="false"
                material="color: red"
                position="0 0 -1.5"
                scale="2 2 2"
              ></a-cursor>
            </a-camera>
          </a-entity>
        </a-scene>
      ) : modelSrc ? (
        //  Model Room
        <a-scene embedded physics className="w-full h-full rounded-lg shadow-lg">
          <a-entity gltf-model={modelSrc} position="0 0 0" scale="1 1 1" static-body />

          {/* الإضاءة */}
          <a-entity light="type: ambient; color: #fff; intensity: 0.9"></a-entity>
          <a-entity light="type: directional; color: #fff; intensity: 0.6" position="1 3 1"></a-entity>

          {/* الأرضية الشفافة للتفاعل */}
          <a-plane
            id="floor"
            position="0 0 0"
            rotation="-90 0 0"
            width="10"
            height="10"
            opacity="0"
            material="transparent: true"
            class="clickable-floor"
          ></a-plane>

          {/* الموديلات القابلة للتحريك */}
          {models.map((model) => (
            <a-entity
              drag-drop
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              rotation={model.rotation}
              scale={model.scale}
              id={model.id}
              className="clickable-item"
              onClick={(evt) => handleModelClick(evt, model)}
            />
          ))}

          <Script src="https://unpkg.com/aframe-joystick-controls@4.0.1/dist/aframe-joystick-controls.min.js" />

          {/* الكاميرا والتحكم */}
          <a-entity
            id="rig"
            movement-controls="enabled: true; fly: false"
            joystick-controls="mode: joystick; joySticky: true"
            position="0 1.6 4"
          >
            {isMobile ? (
              <a-camera
                position="0 0 0"
                custom-touch-look-controls
                look-controls="enabled: false"
                wasd-controls="enabled: false"
              >
                <a-cursor
                  rayOrigin="entity"
                  raycaster="objects: .clickable-item, .clickable-floor"
                  fuse="false"
                  material="color: red"
                  position="0 0 -1.5"
                  scale="2 2 2"
                ></a-cursor>
              </a-camera>
            ) : (
              <a-camera
                position="0 0 0"
                scale="2 2 2"
                look-controls="touchEnabled: true; reverseTouchDrag: false; enabled: true; sensitivity: 0.1"
                wasd-controls="enabled: true"
              >
                <a-cursor
                  rayOrigin="entity"
                  raycaster="objects: .clickable-item, .clickable-floor"
                  material="color: red"
                  fuse="false"
                  position="0 0 -1.5"
                  scale="2 2 2"
                ></a-cursor>
              </a-camera>
            )}
          </a-entity>
        </a-scene>

      ) : (
        //  صورة ثابتة
        <img src="/main2Home.jpg" alt="Main Furniture" className="w-full h-full object-cover" />
      )}


      {/* ✅ أداة القياس نفسها */}
      <MeasurementTool
        isVisible={showMeasurementTool}
        setShowMeasurementTool={setShowMeasurementTool}
      />
      <DimensionsDisplay
        selectedModelId={selectedModelId}
        models={models}
        isVisible={showDimensionsDisplay}
        onClose={handleCloseDimensions}
      />
    </ResponsiveARView>
  );

}
