import "./App.css";
import background from "./assets/background.png";
import githubLogo from "./assets/githubicon.png";
import bird1 from "./assets/bird1.png";
import bird2 from "./assets/bird2.png";
import bird3 from "./assets/bird3.png";
import bird4 from "./assets/bird4.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import Garden from "./garden";
import Setup from "./setup";

import { useState, useEffect } from "react";

function App() {
  const birds = [bird1, bird2, bird3, bird4];

  const [frame, setFrame] = useState(0);

  const navigate = useNavigate(); // ✅ HERE

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 120);

    return () => clearInterval(interval);
  }, []);

 return (
  <Routes>

    <Route
      path="/"
      element={
        <div className="home">
          <img
            src={background}
            alt="background"
            className="background"
          />
          <a
  href="https://github.com/qrstajalli/BranchOut"
  target="_blank"
  rel="noopener noreferrer"
  className="github-btn"
>
  <img
    src={githubLogo}
    alt="GitHub"
    className="github-icon"
  />
</a>

          <button
            className="enter-btn"
            onClick={() => navigate("/setup")}
          >
            ENTER GARDEN
          </button>

          <div className="hero">
  <div className="logo">
    BranchOut
  </div>

  <div className="tagline">
    Your GitHub journey, in bloom.
  </div>
</div>

          <img
            src={birds[frame]}
            alt="bird"
            className="bird"
          />
        </div>
      }
    />

    <Route
      path="/setup"
      element={<Setup />}
    />

    <Route
      path="/garden"
      element={<Garden />}
    />

  </Routes>
);
}

export default App;