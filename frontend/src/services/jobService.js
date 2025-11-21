const BASE_URL = "http://localhost:4000/api/jobs";

export const fetchJobs = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch jobs");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createJob = async (job) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    if (!response.ok) throw new Error("Failed to create job");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
