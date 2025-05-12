import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <div className="flex-container">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </>
  );
}

export default App;
