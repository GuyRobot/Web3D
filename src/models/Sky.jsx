import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScence from '../assets/3d/skyScence'
import { useFrame } from '@react-three/fiber'
const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScence)
    const skyRef = useRef()
    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.25 * delta;
        }
    })
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky
