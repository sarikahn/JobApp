import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import JobsPage from "./components/JobsPage";

const App = () => {
  const [step, setStep] = useState("login");
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email) => {
    setUserEmail(email);
    setStep("profile");
  };

  const handleProfileComplete = () => setStep("jobs");

  return (
    <>
      {step === "login" && <LoginPage onLogin={handleLogin} />}
      {step === "profile" && (
        <ProfilePage onProfileComplete={handleProfileComplete} />
      )}
      {step === "jobs" && <JobsPage userEmail={userEmail} />}
    </>
  );
};

export default App;



