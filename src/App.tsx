import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ file: App.tsx:7 ~ App ~ count:", count);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
