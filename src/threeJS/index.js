import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useEffect, useState } from 'react';

export default function Model(props) {
  const { nodes } = useGLTF('/image.glb');
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const textureLoader = new TextureLoader();
    textureLoader.load('/image.jpg', (loadedTexture) => {
      setTexture(loadedTexture);
    });
  }, []); // Load texture on component mount

  return (
    <group {...props} dispose={null} scale={[0.001, 0.001, 0.1]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
      >
        <meshStandardMaterial
          attach="material"
          map={texture} // Apply the loaded texture
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

// Preload the model
useGLTF.preload('/image.glb');


// export default function Model(props) {
//   const { nodes, materials } = useGLTF('/base_basic_shaded.glb')
//   debugger
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.model.geometry}
//         material={materials.place_holder}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/base_basic_shaded.glb')













// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function Model(props) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/earth.gltf')


  
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group scale={1.13}>
//             <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/earth.gltf')


// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

