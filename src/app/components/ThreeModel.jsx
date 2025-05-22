import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeModel = () => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // Basic Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Add HDRI environment map
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/bambanani_sunset_1k.hdr', function(texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });

    const loader = new GLTFLoader();
    loader.load('models/scene.gltf', 
      (gltf) => {
        gltf.scene.rotation.y = Math.PI
        scene.add(gltf.scene);
        modelRef.current = gltf.scene; // Store reference to the model
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);


    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('.Canvas'),
      antialias: true,
      alpha:true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.SRGBColorSpace;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;
    // Position camera
    camera.position.z = 2.8;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let remaining = Math.PI;  

    function animate() {
      requestAnimationFrame(animate);
    
      if (modelRef.current && remaining > 0) {
        const step = 0.02;                
        const delta = Math.min(step, remaining);
        modelRef.current.rotation.y += delta;
        remaining -= delta;
      }
    
      controls.update();
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef}>
      <canvas className='Canvas z-80' />
    </div>
  );
};

export default ThreeModel;
