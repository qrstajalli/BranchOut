import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Setup() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username) return;

    localStorage.setItem("githubUser", username);

    navigate("/garden");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>🌱 BranchOut</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <button onClick={handleSubmit}>
        Grow Garden
      </button>
    </div>
  );
}

export default Setup;