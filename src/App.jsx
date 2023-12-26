import React, { Suspense } from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Ui } from "./components/Ui";

function App() {
  return (
    <>
    <Canvas shadows camera={{position:[0,0,8],fov:48}}>
      <fog attach="fog" args={["#171720",10,20]}/>
      <color attach="background" args={["#171720"]}/>
      <Suspense>
      <Experience />
      </Suspense>
      <EffectComposer>
        <Bloom mipmapBlur intensity={1.2} />
      </EffectComposer>
    </Canvas>
    <Ui/>
    </>
  );
}

export default App;
