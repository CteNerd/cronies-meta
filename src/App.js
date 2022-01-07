import React from "react";
import logo from "./cronies-logo.svg";
import Box from "./components/Box"
import "./App.css";
import { Canvas } from "react-three-fiber";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
      </Canvas>
        <p>Hard Hat Required. Constructing the Meta.</p>
      </header>
    </div>
  );
}

export default App;
