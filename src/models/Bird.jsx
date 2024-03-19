import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import birdScene from "../assets/3d/birdScene"
import { useFrame } from '@react-three/fiber'
const Bird = () => {
    const birdRef = useRef()
    const { scene, animations } = useGLTF(planeScene);
    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, ref);

    // Use an effect to control the plane's animation based on 'isRotating'
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
        actions["Take 001"].play();
    }, [actions]);

    useFrame(() => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird reached a certain endpoint relative to the camera
        if (birdRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the bird 180 degrees on the y-axis
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the bird's rotation
            birdRef.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (birdRef.current.rotation.y === 0) {
            // Moving forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // Moving backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })


    return (
        <mesh ref={birdRef}
            position={[-5, 2, 1]}
            scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird
