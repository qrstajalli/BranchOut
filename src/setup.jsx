import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gardenbg from "./assets/gardenbg.png";
import "./setup.css";

function Setup() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username) return;

    localStorage.setItem("githubUser", username);

    navigate("/garden");
  };

  return (
  <div className="setup-page">
    <button
  className="back-btn"
  onClick={() => navigate("/")}
>
  ← Back
</button>

    <img
      src={gardenbg}
      alt="background"
      className="setup-background"
    />

    <div className="setup-content">

      <h1 className="setup-title">
         BranchOut
      </h1>

    

      <div className="setup-row">

  <input
    type="text"
    placeholder="Enter GitHub Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="setup-input"
  />

  <button
    onClick={handleSubmit}
    className="setup-button"
  >
    Grow Garden
  </button>

</div>
    </div>
  </div>
);
}

export default Setup;