import { Bounds, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function ProfileFrame() {
    const [model, setModel] = useState(null)
    const modelRef = useRef()
    const [speed, setSpeed] = useState(0.01)

    useFrame(() => {
        if (modelRef.current) {
          modelRef.current.rotation.y += speed; // Putar ke kanan
          if (modelRef.current.rotation.y >= Math.PI * 2) {
            modelRef.current.rotation.y = 0; // Reset setelah 360°
          }
        }
      });

    useEffect(() => {
        // Load model asynchronously
        const loader = new GLTFLoader()
        loader.load('/3d-assets/face1.glb', gltf => setModel(gltf.scene),
        undefined, err => console.error(err))
    }, [])

    return model && (
        <primitive object={model} scale={3} ref={modelRef} position={[0, -3, 0]} />
    )
}

function Profile3D() {
    return (
        <Canvas camera={{ position: [0,-1,5], pov: 1 }} className='!w-[55px] !h-[55px]'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10,5,10]} />
            <Bounds fit clip observe>
                <ProfileFrame />
            </Bounds>
            <OrbitControls enableDamping={true} />
        </Canvas>
    )
}

export default function Header() {
    return (
        <div className="header flex items-center w-full h-[50px] overflow-hidden">
            <div className="right-side flex w-fit ml-auto mr-0 items-center">
                <Profile3D />
            </div>
           

        </div>
    )
}