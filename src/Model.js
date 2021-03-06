/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/orangutanface.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes.geometry}
        material={materials['PM3D_Sphere3D1.001']}
        position={[3, 12.7, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teeth.geometry}
        material={materials.PM3D_Sphere3D5}
        position={[3, 12.7, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue.geometry}
        material={materials.PM3D_Cylinder3D1}
        position={[3, 12.7, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Face.geometry}
        material={materials['Recovered_Tool.002']}
        position={[-5.5, 8.1, -0.1]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/orangutanface2.glb')
