import React from "react";
import { CounterProvider } from "./context/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

function App() {
  return (
    <CounterProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default App;
