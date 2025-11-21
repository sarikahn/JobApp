import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Job fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (jobs.length === 0) return <p>No jobs available.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Description:</strong> {job.description}</p>

          {job.applyLink && (
            <button
              onClick={() => window.open(job.applyLink, "_blank")}
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Apply
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobList;


