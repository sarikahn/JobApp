
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/users";

export const loginUser = async (email, password) => {
  return await axios.post(`${BASE_URL}/login`, { email, password });
};

export const saveProfile = async (profileData, token) => {
  return await axios.post(`${BASE_URL}/profile`, profileData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Example job-related functions (if needed later)
export const getJobs = async () => {
  return await axios.get("http://localhost:3000/api/jobs");
};

export const applyJob = async (jobTitle, userEmail) => {
  return await axios.post("http://localhost:3000/api/jobs/apply", {
    jobTitle,
    userEmail,
  });
};
