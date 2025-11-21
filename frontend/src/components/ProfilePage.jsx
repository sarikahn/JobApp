import React, { useState } from "react";
import "./ProfilePage.css";
import profileBg from "../assets/profile-bg.jpg"; // make sure the image exists

export default function ProfilePage({ onProfileComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    skills: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.skills) {
      alert("Please fill in all required fields");
      return;
    }

    localStorage.setItem("profileData", JSON.stringify(formData));
    localStorage.setItem("profileCompleted", "true");

    if (onProfileComplete) {
      onProfileComplete(formData);
    }
  };

  return (
    <div
      className="profile-page"
      style={{
        backgroundImage: `url(${profileBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Complete Your Profile</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="file-input"
        />

        <button type="submit" className="profile-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

