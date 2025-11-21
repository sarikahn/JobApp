import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./components/ProfilePage";
import Job from "./components/Job";
import MyApplications from "./components/MyApplications";

export default function App() {
  const [page, setPage] = useState("login");
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email, token) => {
    localStorage.setItem("user", email);
    localStorage.setItem("token", token);
    setUserEmail(email);
    setPage("profile");
  };

  const handleProfileComplete = (data) => {
    localStorage.setItem("profileCompleted", "true");
    localStorage.setItem("profileData", JSON.stringify(data));
    setPage("jobs");
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserEmail("");
    setPage("login");
  };

  // Render correct page
  return (
    <>
      {page === "login" && <LoginPage onLogin={handleLogin} />}
      {page === "profile" && <ProfilePage onProfileComplete={handleProfileComplete} />}
      {page === "jobs" && <Job onLogout={handleLogout} onViewApplications={() => setPage("applications")} />}
      {page === "applications" && <MyApplications onBack={() => setPage("jobs")} />}
    </>
  );
}
