// src/three/ThreeScene.tsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    // Load the .glb file
    const loader = new GLTFLoader();
    loader.load(
      '/base_basic_shaded.glb', // Path to your .glb file in the public directory
      (gltf) => {
        // Add the loaded GLTF model to the scene
        scene.add(gltf.scene);
      },
      // onProgress callback
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // onError callback
      (error) => {
        console.error('An error happened', error);
      }
    );

    // Set up camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
