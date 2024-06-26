import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import { Island } from '../models/Island'
import { Sky } from '@react-three/drei'
import { Plane } from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import { Bird } from '../models'
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volumn = 0.4;
  audioRef.current.loop = true;
  const adjuctIslandForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [.1, .47, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPosition, screenScale, rotation]
  }



  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [screenPosition, screenScale, rotation] = adjuctIslandForScreen();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1} />
          <Bird />
          <Sky />
          <Island position={screenPosition} scale={screenScale} rotation={rotation} setCurrentStage={setCurrentStage} isRotating={isRotating} setIsRotating={setIsRotating} />
          <Plane isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale} />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home