'use client'
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

const SphereMesh = () => {
    const meshRef = useRef(null);
    let elapsedTime = 0;

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            elapsedTime += state.clock.getDelta(); 

            meshRef.current.children[0].position.x = -1.2 * Math.sin(elapsedTime * 0.006); 
            meshRef.current.children[0].position.z = 0.2 * Math.cos(elapsedTime * 0.006);

            // meshRef.current.children[1].position.x = 0.8 * Math.sin(elapsedTime * 1.2);
            // meshRef.current.children[1].position.z = 0.8 * Math.cos(elapsedTime * 1.2);
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 2, 0]}  castShadow rotation={[Math.PI / 1.3, 0, 0.2]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#5B9ED7" wireframe = {true} />
            <SphereMesh2/>
            {/* <SphereMesh3/> */}
            <CubeMesh/>
            <CubeMesh2/>
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
    <mesh ref={meshRef2} position={[0.3, 0.1, 0.5]}  castShadow rotation={[Math.PI / 1.3, 5, 0.2]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" wireframe = {true}/>
    </mesh>
);

}

// const SphereMesh3 = () => {
//     const meshRef3 = useRef(null);

//     useFrame(() => {
//         if (meshRef3.current) {
//             meshRef3.current.rotation.y += 0.03;
//         }
//     });

//     return (
//         <mesh ref={meshRef3} position={[-0.5, 0, -0.7]}  castShadow rotation={[Math.PI / 1.3, 0, 0.2]}>
//             <sphereGeometry args={[0.15, 32, 32]} />
//             <meshStandardMaterial color="blue"/>
//         </mesh>
//     );
// }

const CubeMesh = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#FFB854" wireframe= {true} />
        </mesh>
    );
}
const CubeMesh2 = () => {
    return (
        <mesh position={[0, 0, 0]} rotation = {[0, Math.PI/4, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#FFB854" wireframe= {true} />
        </mesh>
    );
}


const BottomPlane = () => {
    return (
        <mesh receiveShadow position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]}/>
            <meshStandardMaterial color="051F36"/>
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
