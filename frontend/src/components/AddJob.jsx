import React, { useState } from "react";

const AddJob = ({ onJobAdded }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send POST request to backend API
    // For demo, we just log it
    console.log("Job Added:", { title, location, description });

    // Clear form
    setTitle("");
    setLocation("");
    setDescription("");

    // Notify parent to refresh job list
    if (onJobAdded) onJobAdded();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px" }}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px", height: "100px" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Job
      </button>
    </form>
  );
};

export default AddJob;
