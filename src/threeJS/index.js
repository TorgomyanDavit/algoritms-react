import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/base_basic_shaded.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.place_holder}
      />
    </group>
  )
}

useGLTF.preload('/base_basic_shaded.glb')