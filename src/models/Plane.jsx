import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import planeScene from "../assets/3d/plane.glb"
import { useEffect } from 'react'
export const Plane = ({ isRotating, ...props }) => {
    const planeRef = useRef()
    const { scene, animations } = useGLTF(planeScene);
    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, planeRef);

    // Use an effect to control the plane's animation based on 'isRotating'
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
        if (isRotating) {
            actions["Take 001"].play();
        } else {
            actions["Take 001"].stop();
        }
    }, [actions, isRotating]);
    return (
        <mesh {...props} ref={planeRef}>
            <primitive object={scene} />
        </mesh>
    )
}
