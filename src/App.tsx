import { /* useState, useRef, */ Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as THREE from "three";
import { Canvas /* useFrame, useLoader, useThree */ } from "@react-three/fiber";
import {
  OrbitControls,
  /* useHelper, */ useProgress,
  Html,
} from "@react-three/drei";
import Earth from "./components/Earth";

function App() {
  const { progress } = useProgress();
  // const directionalLight = useRef<THREE.DirectionalLight>(null);
  // const boxRef = useRef<THREE.Mesh>(null);
  // const sphereRef = useRef<THREE.Mesh>(null);
  // const [active, setActive] = useState(false);
  // const { viewport } = useThree();

  // useHelper(
  //   directionalLight as React.MutableRefObject<THREE.DirectionalLight>,
  //   THREE.DirectionalLightHelper,
  //   1,
  //   "red"
  // );

  // useFrame((state, delta) => {
  //   const time = state.clock.elapsedTime;
  //   if (boxRef.current) {
  //     boxRef.current.position.x = Math.sin(time) + 1.5;
  //     boxRef.current.rotation.y += delta;
  //   }

  //   if (sphereRef.current) {
  //     sphereRef.current.position.z = Math.cos(time) + 0.5;
  //     sphereRef.current.rotation.y += delta;
  //     sphereRef.current.rotation.x += delta;
  //   }
  // });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Canvas
        flat
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{
          fov: 60,
          near: 0.1,
          far: 2000,
          position: [-0.5, 1, 2],
        }}
      >
        <Suspense fallback={<Html center>{progress} % loaded...</Html>}>
          <Earth />
          {/* コントロール */}
          <OrbitControls makeDefault />

          {/* <axesHelper args={[5]} /> */}

          {/* モニター */}
          {/* <Perf position="top-left" /> */}

          {/* 背景 */}
          {/* <color args={["ivory"]} attach="background" /> */}

          {/* 環境光 */}
          <ambientLight intensity={0.5} />

          {/* 平行光 */}
          {/* <directionalLight
          castShadow
          ref={directionalLight}
          position={[1, 2, 3]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
        /> */}

          {/* <points>
        <bufferGeometry>
          <bufferAttribute />
        </bufferGeometry>
        <pointsMaterial size={0.1} />
      </points> */}

          {/* <group position={[0, -1, 0]}>
          <mesh
            castShadow
            position={[-1, 0.6, 0]}
            scale={(viewport.width / 6) * (active ? 0.8 : 0.6)}
            onClick={(event) => setActive(!active)}
            ref={sphereRef}
          >
            <sphereGeometry /> */
          /* </mesh> */}

          {/* <mesh
            castShadow
            position={[1, 0.5, 0]}
            ref={boxRef}
            scale={viewport.width / 6}
          >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh> */}

          {/* <mesh
            receiveShadow
            rotation-x={-Math.PI * 0.5}
            scale={viewport.width / 2}
          >
            <planeGeometry />
            <meshStandardMaterial color="lightseagreen" />
          </mesh>
        </group> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
