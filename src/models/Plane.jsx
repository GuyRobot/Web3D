import { useGLTF } from '@react-three/drei'
import React from 'react'
import planeScene from "../assets/3d/planeScene"
const Bird = () => {
    const [scene, animations] = useGLTF(planeScene)
    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird
