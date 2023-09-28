'use client'
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

const SphereMesh = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 2, 0]}  castShadow rotation={[Math.PI / 1.3, 0, 0.2]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#5B9ED7" transparent = {true} opacity={0.5}/>
            <SphereMesh2/>
            <CubeMesh/>
            <CubeMesh rotation={[0, Math.PI/4, 0]} />
        </mesh>
    );
}

const SphereMesh2 = () => {
    const meshRef2 = useRef(null);

    useFrame(() => {
        if (meshRef2.current) {
            meshRef2.current.rotation.y += 0.006;
        }
    });

    return (
    <mesh ref={meshRef2} position={[0, 0, 0]}  rotation={[Math.PI / 1.3, 5, 0.2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="white" wireframe = {true}/>
    </mesh>
);

}

const CubeMesh = ({ rotation = [0, 0, 0] }) => {
    return (
        <mesh position={[0, 0, 0]} rotation={rotation}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#FFB854" wireframe= {true} />
        </mesh>
    );
}


const BottomPlane = () => {
    return (
        <mesh receiveShadow position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]}/>
            <meshStandardMaterial color="#020e18"/>
        </mesh>
    )
}

const RotatingLight = () => {
    const lightRef = useRef(null);
    let theta = 0; 
    const maxAngle = Math.PI / 4;
    const oscillationSpeed = 0.005; 

    useFrame(() => {
        if (lightRef.current) {
            theta += oscillationSpeed;
            lightRef.current.position.y = 5 + Math.sin(theta) * maxAngle;
            lightRef.current.position.x = 0;
            lightRef.current.position.z = 0;
        }
    });

    return (
        <directionalLight ref={lightRef} position={[0, 30, 0]} intensity={3} color='#5B9ED7' castShadow shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
        shadow-radius={5}
        />
    );
}



const BackgroundAsset = () => {
    return (
        <Canvas shadows style={{ width: '100vw', height: '100vh', position: 'absolute', top: '0', zIndex: '-10' }}>
            <PerspectiveCamera 
                position={[0, 0, 10]}
                fov={55}
                near={0.1}
                far={100}
                makeDefault
            />
            <RotatingLight />
            <ambientLight position={[0, 20, 0]} intensity={4.3}/>
            <pointLight position={[0, 0, -4.3]} intensity={70} color = '#FFD17D'/>
            <SphereMesh/>
            <BottomPlane/>
        </Canvas>
    );
};

export default BackgroundAsset;
