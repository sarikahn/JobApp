import React, { useEffect, useState } from "react";
import "./MyApplications.css";

export default function MyApplications({ onBack, onLogout }) {
  const [applied, setApplied] = useState([]);

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    setApplied(a);
  }, []);

  return (
    <div className="applications-page">
      <div className="applications-header">
        <h1>My Applications</h1>
        <div>
          <button onClick={onBack} className="back-btn">Back to Jobs</button>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      {applied.length === 0 ? (
        <p style={{textAlign:"center", color:"#777"}}>You haven't applied to any jobs yet.</p>
      ) : (
        applied.map(job => (
          <div key={job.id} className="application-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Applied By:</strong> {job.appliedBy}</p>
            <p><strong>Applied At:</strong> {new Date(job.appliedAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}


