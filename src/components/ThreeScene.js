import { useEffect, useRef } from "react";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const initScene = async () => {
      const THREE = await import("three");

      const mountNode = mountRef.current;
      if (!mountNode || mountNode.children.length > 0) return;

      // === SCENE SETUP ===
      const scene = new THREE.Scene();
      scene.background = null;

      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 12;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      mountNode.appendChild(renderer.domElement);

      // === MAGNIFYING GLASS ===
      const glassGroup = new THREE.Group();

      // Glass ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2, 0.15, 20, 100),
        new THREE.MeshStandardMaterial({
          color: 0x6366f1,
          metalness: 0.95,
          roughness: 0.15,
          emissive: 0x5855f8,
          emissiveIntensity: 0.3,
        })
      );
      glassGroup.add(ring);

      // Lens
      const lens = new THREE.Mesh(
        new THREE.CircleGeometry(1.82, 64),
        new THREE.MeshPhysicalMaterial({
          transmission: 0.96,
          thickness: 0.8,
          roughness: 0,
          clearcoat: 1,
          ior: 1.5,
          side: THREE.DoubleSide,
        })
      );
      glassGroup.add(lens);

      // Handle
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 3.2, 32),
        new THREE.MeshStandardMaterial({
          color: 0x4c1d95,
          metalness: 0.9,
          roughness: 0.2,
        })
      );
      handle.rotation.z = Math.PI / 4.8;
      handle.position.set(1.9, -1.9, 0);
      glassGroup.add(handle);

      // Checkmark
      const checkShape = new THREE.Shape();
      checkShape.moveTo(-0.8, -0.3).lineTo(0, 0.7).lineTo(1.6, -1);
      const check = new THREE.Mesh(
        new THREE.ExtrudeGeometry(checkShape, {
          depth: 0.3,
          bevelEnabled: true,
          bevelSize: 0.05,
        }),
        new THREE.MeshStandardMaterial({
          color: 0x10b981,
          emissive: 0x10b981,
          emissiveIntensity: 0.4,
        })
      );
      check.scale.set(0.8, 0.8, 0.8);
      check.position.z = 0.2;
      glassGroup.add(check);

      scene.add(glassGroup);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const directionalLight = new THREE.DirectionalLight(0xa78bfa, 1.2);
      directionalLight.position.set(5, 8, 7);
      scene.add(directionalLight);

      const pointLight1 = new THREE.PointLight(0x818cf8, 0.8, 20);
      pointLight1.position.set(3, 3, 5);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xc084fc, 0.5, 20);
      pointLight2.position.set(-3, -2, 3);
      scene.add(pointLight2);

      // === RESPONSIVE ===
      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);

        const scale = w < 768 ? 0.7 : w < 1024 ? 0.9 : 1;
        glassGroup.scale.set(scale, scale, scale);
        glassGroup.position.y = w < 768 ? -0.5 : -0.8;
      };

      onResize();
      window.addEventListener("resize", onResize);

      // === SMOOTH ANIMATION ===
      const clock = new THREE.Clock();
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const animate = () => {
        const t = clock.getElapsedTime();

        // Smooth floating animation
        glassGroup.position.x = Math.sin(t * 0.3) * 0.4 + mouseX * 0.3;
        glassGroup.position.y =
          (window.innerWidth < 768 ? -0.5 : -0.8) +
          Math.sin(t * 0.5) * 0.25 +
          mouseY * 0.2;
        glassGroup.rotation.y = t * 0.08 + mouseX * 0.3;

        // Pulsing emissive effect
        ring.material.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.1;

        // Subtle checkmark rotation
        check.rotation.z = Math.sin(t * 0.2) * 0.1;

        renderer.render(scene, camera);
        frameRef.current = requestAnimationFrame(animate);
      };

      animate();

      // Cleanup function
      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", handleMouseMove);

        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }

        if (renderer && mountNode.contains(renderer.domElement)) {
          mountNode.removeChild(renderer.domElement);
        }

        if (renderer) {
          renderer.dispose();
        }
      };
    };

    const cleanup = initScene();

    // Return cleanup function
    return () => {
      if (cleanup && typeof cleanup.then === "function") {
        cleanup.then((fn) => fn && fn());
      } else if (cleanup && typeof cleanup === "function") {
        cleanup();
      }

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" />
  );
};

export default ThreeScene;
