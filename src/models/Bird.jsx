import { useGLTF } from '@react-three/drei'
import React from 'react'
import birdScene from "../assets/3d/birdScene"
const Bird = () => {
    const [scene, animations] = useGLTF(birdScene)
    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird
