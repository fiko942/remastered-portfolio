import { Bounds, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function ProfileFrame({ onLoading }) {
    const [model, setModel] = useState(null)
    const modelRef = useRef()
    const [speed, setSpeed] = useState(0.01)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        onLoading && onLoading(loading)
    }, [loading])

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
        loader.load('/3d-assets/face1.glb', gltf => { // when the model is loaded
            setModel(gltf.scene)
            // setLoading(false)
        },
        undefined, err => console.error(err))
    }, [])

    return model && (
        <primitive object={model} scale={3} ref={modelRef} position={[0, -3, 0]} />
    )   
}

function Profile3D({ onLoading }) {
    return (
        <Canvas camera={{ position: [0,-1,5], pov: 1 }} className='!w-[55px] !h-[55px]'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10,5,10]} />
            <Bounds fit clip observe>
                <ProfileFrame onLoading={onLoading} />
            </Bounds>
            <OrbitControls enableDamping={true} />
        </Canvas>
    )
}

export default function Header() {
    return (
        <div className="header flex items-center w-full h-[50px] overflow-hidden bg-white opacity-100 shadow-sm inset-shadow-zinc-500 transition-all duration-300 mx-auto px-4" style={{
            backdropFilter: 'blur(50px)',
            opacity: 0.9
        }}>
            <div className="left-side flex w-fit ml-0 items-center gap-2">
                <div className="profile-3d-container rounded-md overflow-hidden bg-gray-300 shadow-lg shadow-gray-400 w-[40px] h-[40px] content-center items-center flex">
                <Profile3D />
                </div>
                <div className="name">
                    <h3 className='mt-1 font-semibold text-gray-700'>Wiji Fiko Teren</h3>
                    <h5 className='text-xs mt-[-3px]'>Junior Software Developer at <a href="#" className='text-blue-600 underline'>Ziqva Labs</a></h5>
                </div>
            </div>
        </div>
    )
}