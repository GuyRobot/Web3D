import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScence from '../assets/3d/skyScence'
const Sky = () => {
    const sky = useGLTF(skyScence)
    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky
