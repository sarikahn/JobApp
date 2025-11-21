import React, { useState } from "react";

export default function TestAPI() {
  const [message, setMessage] = useState("");

  const checkAPI = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const data = await response.text();
      setMessage(data);
    } catch (err) {
      setMessage("❌ Connection failed!");
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Backend Connection Test</h2>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "teal",
          color: "white",
          cursor: "pointer",
        }}
        onClick={checkAPI}
      >
        Test Connection
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}
