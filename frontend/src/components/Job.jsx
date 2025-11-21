import React, { useState, useEffect } from "react";
import "./Job.css";

export default function Job() {
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    domain: "",
    type: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showApplications, setShowApplications] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

  // Load applied jobs from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(stored);
  }, []);

  // Save applied jobs to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Delhi",
      domain: "Software Development",
      type: "Full-time",
      skills: "React, JavaScript, CSS",
      salary: "12 LPA",
      description: "Develop and maintain React web applications.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Microsoft",
      location: "Bangalore",
      domain: "Cloud",
      type: "Internship",
      skills: "Node.js, MongoDB, Express",
      salary: "8 LPA",
      description: "Build scalable backend systems and REST APIs.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Pune",
      domain: "Design",
      type: "Part-time",
      skills: "Figma, UX Research, Prototyping",
      salary: "6 LPA",
      description: "Design user-friendly interfaces and experiences.",
    },
{id:4,title:"Frontend Developer",company:"Google",location:"Bangalore",domain:"Software Development",type:"Full-time",skills:"React, JavaScript, CSS",salary:"12 LPA",description:"Develop dynamic and responsive interfaces using React."},
{id:5,title:"Backend Developer",company:"Amazon",location:"Hyderabad",domain:"Software Development",type:"Full-time",skills:"Node.js, Express, MongoDB",salary:"14 LPA",description:"Build high-performance backend APIs."},
{id:6,title:"UI/UX Designer",company:"Adobe",location:"Pune",domain:"Design",type:"Part-time",skills:"Figma, UX Research, Prototyping",salary:"6 LPA",description:"Design user-friendly digital experiences."},
{id:7,title:"Cloud Engineer",company:"Microsoft",location:"Noida",domain:"Cloud",type:"Full-time",skills:"Azure, Docker, Kubernetes",salary:"16 LPA",description:"Deploy and maintain scalable cloud services."},
{id:8,title:"Software Engineer",company:"Infosys",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"Java, Spring Boot, MySQL",salary:"8 LPA",description:"Work on enterprise-grade software solutions."},
{id:9,title:"Data Analyst",company:"TCS",location:"Delhi",domain:"Software Development",type:"Full-time",skills:"Python, SQL, Power BI",salary:"7 LPA",description:"Analyze business data to derive insights."},
{id:10,title:"Digital Marketing Executive",company:"Zoho",location:"Coimbatore",domain:"Digital Marketing Executive",type:"Full-time",skills:"SEO, Google Ads, Analytics",salary:"5 LPA",description:"Handle online campaigns and digital brand presence."},
{id:11,title:"SEO Specialist",company:"Tech Mahindra",location:"Pune",domain:"SEO Specialist",type:"Full-time",skills:"Keyword Research, On-page SEO, Backlinks",salary:"4.5 LPA",description:"Optimize websites to rank higher in search engines."},
{id:12,title:"Project Coordinator",company:"Wipro",location:"Bangalore",domain:"Project Coordinator",type:"Full-time",skills:"MS Project, Communication, Agile",salary:"6.5 LPA",description:"Coordinate projects and manage team deliverables."},
{id:13,title:"Visual Designer",company:"Figma",location:"Mumbai",domain:"Design",type:"Remote",skills:"Illustrator, Photoshop, Branding",salary:"6 LPA",description:"Create engaging visuals and UI assets."},
{id:14,title:"Accountant",company:"HDFC Bank",location:"Delhi",domain:"Finance",type:"Full-time",skills:"Tally, Excel, GST",salary:"4 LPA",description:"Maintain and reconcile financial accounts."},
{id:15,title:"Financial Analyst",company:"Deloitte",location:"Gurgaon",domain:"Finance",type:"Full-time",skills:"Excel, Tableau, Forecasting",salary:"10 LPA",description:"Analyze financial data to support strategic decisions."},
{id:16,title:"HR Executive",company:"Accenture",location:"Hyderabad",domain:"HR Executive",type:"Full-time",skills:"Recruitment, Payroll, HR Policies",salary:"6 LPA",description:"Handle HR operations and talent management."},
{id:17,title:"Full Stack Developer",company:"Paytm",location:"Noida",domain:"Software Development",type:"Full-time",skills:"React, Node.js, MongoDB",salary:"13 LPA",description:"Develop and deploy full-stack web applications."},
{id:18,title:"Software Engineer Intern",company:"Flipkart",location:"Bangalore",domain:"Software Development",type:"Internship",skills:"JavaScript, APIs, Git",salary:"25K/month",description:"Assist in developing and testing new features."},
{id:19,title:"Data Analyst Intern",company:"Swiggy",location:"Hyderabad",domain:"Software Development",type:"Internship",skills:"Python, SQL, Excel",salary:"20K/month",description:"Support analytics team in building data reports."},
{id:20,title:"Frontend Developer",company:"Cognizant",location:"Pune",domain:"Software Development",type:"Full-time",skills:"HTML, CSS, React",salary:"8 LPA",description:"Develop user interfaces for client projects."},
{id:21,title:"Product Manager",company:"Zomato",location:"Delhi",domain:"Product Manager",type:"Full-time",skills:"Product Roadmaps, Agile, Analytics",salary:"18 LPA",description:"Define and deliver product strategy and features."},
{id:22,title:"Backend Developer",company:"IBM",location:"Kolkata",domain:"Software Development",type:"Hybrid",skills:"Java, Spring, REST APIs",salary:"10 LPA",description:"Design and optimize server-side applications."},
{id:23,title:"UI Designer",company:"Canva",location:"Mumbai",domain:"Design",type:"Remote",skills:"Sketch, Figma, Design Systems",salary:"7 LPA",description:"Craft modern UI layouts and visual elements."},
{id:24,title:"Cloud Support Engineer",company:"AWS",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"AWS Services, Linux, Networking",salary:"13 LPA",description:"Provide support for AWS clients and issues."},
{id:25,title:"HR Coordinator",company:"Infosys",location:"Chennai",domain:"HR Executive",type:"Full-time",skills:"Communication, HRMS, Scheduling",salary:"5.5 LPA",description:"Coordinate between HR departments."},
{id:26,title:"Project Manager",company:"Accenture",location:"Bangalore",domain:"Project Coordinator",type:"Full-time",skills:"Agile, Scrum, Leadership",salary:"18 LPA",description:"Manage project lifecycles and deliverables."},
{id:27,title:"Frontend Developer",company:"Zoho",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"React, Redux, CSS",salary:"9 LPA",description:"Develop customer-facing UI solutions."},
{id:28,title:"Backend Engineer",company:"Oracle",location:"Hyderabad",domain:"Software Development",type:"Full-time",skills:"Java, SQL, Microservices",salary:"15 LPA",description:"Maintain large-scale backend systems."},
{id:29,title:"UI/UX Designer",company:"Byjus",location:"Bangalore",domain:"Design",type:"Hybrid",skills:"User Research, Prototyping, Figma",salary:"8 LPA",description:"Design edtech interfaces and experiences."},
{id:30,title:"Marketing Manager",company:"Unacademy",location:"Pune",domain:"Digital Marketing Executive",type:"Full-time",skills:"Campaigns, SEO, SEM",salary:"12 LPA",description:"Lead digital marketing initiatives."},
{id:31,title:"Software Developer",company:"Mindtree",location:"Kolkata",domain:"Software Development",type:"Full-time",skills:"C#, .NET, SQL",salary:"9 LPA",description:"Develop enterprise-grade applications."},
{id:32,title:"Cloud Architect",company:"Google Cloud",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"Cloud Infrastructure, Terraform, GCP",salary:"22 LPA",description:"Design and architect GCP-based solutions."},
{id:33,title:"Finance Associate",company:"EY",location:"Gurgaon",domain:"Finance",type:"Full-time",skills:"Audit, Excel, Financial Modeling",salary:"9 LPA",description:"Assist in auditing and financial operations."},
{id:34,title:"HR Intern",company:"TCS",location:"Noida",domain:"HR Executive",type:"Internship",skills:"Recruitment, Scheduling, Excel",salary:"10K/month",description:"Assist HR team with recruitment drives."},
{id:35,title:"Software Developer",company:"Capgemini",location:"Delhi",domain:"Software Development",type:"Full-time",skills:"JavaScript, Node.js",salary:"8 LPA",description:"Create backend services and APIs."},
{id:36,title:"UI/UX Intern",company:"Figma",location:"Remote",domain:"Design",type:"Internship",skills:"Figma, Wireframing",salary:"15K/month",description:"Support design team with research and mockups."},
{id:37,title:"Data Analyst",company:"PayPal",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"SQL, Tableau, Python",salary:"11 LPA",description:"Analyze data trends and optimize performance."},
{id:38,title:"Frontend Engineer",company:"Zoho",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"React, Tailwind, APIs",salary:"10 LPA",description:"Implement web interfaces for Zoho products."},
{id:39,title:"Backend Engineer",company:"Adobe",location:"Pune",domain:"Software Development",type:"Full-time",skills:"Django, Python, APIs",salary:"12 LPA",description:"Create scalable backend microservices."},
{id:40,title:"Product Designer",company:"Canva",location:"Bangalore",domain:"Design",type:"Remote",skills:"Figma, UX, UI Design",salary:"9 LPA",description:"Create engaging design components."},
{id:41,title:"SEO Executive",company:"UrbanClap",location:"Delhi",domain:"SEO Specialist",type:"Full-time",skills:"SEO Tools, Google Analytics",salary:"5 LPA",description:"Plan and optimize SEO campaigns."},
{id:42,title:"Finance Manager",company:"ICICI",location:"Mumbai",domain:"Finance",type:"Full-time",skills:"Finance, Tax, MIS",salary:"14 LPA",description:"Manage financial operations and compliance."},
{id:43,title:"DevOps Engineer",company:"Microsoft",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"AWS, Docker, Jenkins",salary:"17 LPA",description:"Automate deployments and CI/CD pipelines."},
{id:44,title:"Full Stack Developer",company:"IBM",location:"Noida",domain:"Software Development",type:"Hybrid",skills:"MERN Stack",salary:"12 LPA",description:"Develop both frontend and backend modules."},
{id:45,title:"Frontend Developer",company:"Cognizant",location:"Kolkata",domain:"Software Development",type:"Full-time",skills:"HTML, JS, React",salary:"9 LPA",description:"Develop and maintain user-facing features."},
{id:46,title:"Graphic Designer",company:"Adobe",location:"Pune",domain:"Design",type:"Part-time",skills:"Photoshop, Illustrator",salary:"5 LPA",description:"Design visuals and marketing creatives."},
{id:47,title:"Full Stack Intern",company:"TCS",location:"Bangalore",domain:"Software Development",type:"Internship",skills:"React, Node.js",salary:"20K/month",description:"Assist dev team in frontend & backend tasks."},
{id:48,title:"Backend Engineer",company:"Amazon",location:"Hyderabad",domain:"Software Development",type:"Full-time",skills:"Node.js, AWS, MongoDB",salary:"14 LPA",description:"Optimize and manage backend systems."},
{id:49,title:"Product Analyst",company:"Zomato",location:"Delhi",domain:"Product Manager",type:"Hybrid",skills:"SQL, Analytics",salary:"10 LPA",description:"Monitor user data and suggest improvements."},
{id:50,title:"Software Engineer",company:"Wipro",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"C++, MySQL",salary:"7.5 LPA",description:"Write efficient code for enterprise systems."},
{id:51,title:"Digital Marketing Intern",company:"Byjus",location:"Pune",domain:"Digital Marketing Executive",type:"Internship",skills:"Google Ads, SEO",salary:"12K/month",description:"Support marketing campaigns and research."},
{id:52,title:"Cloud Engineer",company:"Oracle",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"OCI, Python, Terraform",salary:"16 LPA",description:"Design and manage cloud deployments."},
{id:53,title:"Software Tester",company:"Cognizant",location:"Bangalore",domain:"Software Development",type:"Full-time",skills:"Selenium, JIRA, APIs",salary:"6.5 LPA",description:"Test and validate software applications."},
{id:54,title:"Finance Associate",company:"PwC",location:"Gurgaon",domain:"Finance",type:"Full-time",skills:"Accounting, Auditing",salary:"8.5 LPA",description:"Prepare and review financial reports."},
{id:55,title:"HR Recruiter",company:"Tech Mahindra",location:"Pune",domain:"HR Executive",type:"Full-time",skills:"Talent Acquisition, LinkedIn",salary:"5 LPA",description:"Manage end-to-end recruitment process."},
{id:56,title:"Product Designer",company:"Canva",location:"Remote",domain:"Design",type:"Full-time",skills:"Figma, Design Thinking",salary:"8 LPA",description:"Collaborate with product and dev teams for design."},
{id:57,title:"Cloud Admin",company:"AWS",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"AWS Services, CI/CD",salary:"12 LPA",description:"Administer AWS cloud environments."},
{id:58,title:"Software Intern",company:"Zoho",location:"Chennai",domain:"Software Development",type:"Internship",skills:"C++, SQL",salary:"18K/month",description:"Assist development team in module creation."},
{id:59,title:"SEO Analyst",company:"Infosys",location:"Bangalore",domain:"SEO Specialist",type:"Full-time",skills:"SEO, Analytics",salary:"5.5 LPA",description:"Monitor SEO performance and content optimization."},
{id:60,title:"Backend Developer",company:"Capgemini",location:"Kolkata",domain:"Software Development",type:"Full-time",skills:"Node.js, APIs",salary:"9 LPA",description:"Develop and maintain APIs."},
{id:61,title:"Graphic Designer",company:"Figma",location:"Remote",domain:"Design",type:"Full-time",skills:"Adobe XD, Photoshop",salary:"6.5 LPA",description:"Design creative marketing assets."},
{id:62,title:"Full Stack Developer",company:"Google",location:"Bangalore",domain:"Software Development",type:"Full-time",skills:"React, Node.js, GraphQL",salary:"22 LPA",description:"Work on scalable full-stack systems."},
{id:63,title:"Cloud Architect",company:"Microsoft",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"Azure, Docker, CI/CD",salary:"24 LPA",description:"Lead cloud architecture strategy."},
{id:64,title:"Software Developer",company:"TCS",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"Java, APIs",salary:"8 LPA",description:"Build and maintain software applications."},
{id:65,title:"UI Designer",company:"Adobe",location:"Pune",domain:"Design",type:"Full-time",skills:"Figma, Sketch",salary:"7.5 LPA",description:"Create modern UI for products."},
{id:66,title:"Data Analyst",company:"Swiggy",location:"Hyderabad",domain:"Software Development",type:"Full-time",skills:"Python, SQL",salary:"10 LPA",description:"Analyze customer and delivery data."},
{id:67,title:"Software Engineer",company:"Zoho",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"Node.js, React",salary:"9 LPA",description:"Develop cloud-based software products."},
{id:68,title:"Frontend Developer",company:"Infosys",location:"Delhi",domain:"Software Development",type:"Full-time",skills:"JS, HTML, CSS",salary:"8 LPA",description:"Develop responsive user interfaces."},
{id:69,title:"Backend Developer",company:"Amazon",location:"Hyderabad",domain:"Software Development",type:"Full-time",skills:"Node.js, Express",salary:"14 LPA",description:"Handle backend operations at scale."},
{id:70,title:"Digital Marketing Executive",company:"Unacademy",location:"Bangalore",domain:"Digital Marketing Executive",type:"Full-time",skills:"SEO, Ads",salary:"6 LPA",description:"Plan marketing strategy and campaigns."},
{id:71,title:"Product Manager",company:"Paytm",location:"Noida",domain:"Product Manager",type:"Full-time",skills:"Leadership, Agile",salary:"19 LPA",description:"Oversee digital product roadmap."},
{id:72,title:"Software Tester",company:"Wipro",location:"Kolkata",domain:"Software Development",type:"Full-time",skills:"Manual Testing, Selenium",salary:"7 LPA",description:"Perform QA and bug tracking."},
{id:73,title:"Data Scientist",company:"Google",location:"Bangalore",domain:"Software Development",type:"Full-time",skills:"Python, ML, TensorFlow",salary:"25 LPA",description:"Build predictive data models."},
{id:74,title:"Cloud Support",company:"AWS",location:"Hyderabad",domain:"Cloud",type:"Full-time",skills:"AWS, Linux",salary:"10 LPA",description:"Support AWS clients with cloud queries."},
{id:75,title:"UI/UX Designer",company:"Canva",location:"Remote",domain:"Design",type:"Full-time",skills:"Figma, UX Research",salary:"8 LPA",description:"Design prototypes for web and mobile."},
{id:76,title:"Frontend Developer",company:"Zoho",location:"Chennai",domain:"Software Development",type:"Full-time",skills:"React, Tailwind",salary:"9 LPA",description:"Develop intuitive UI components."},
{id:77,title:"Backend Developer",company:"Microsoft",location:"Noida",domain:"Software Development",type:"Full-time",skills:".NET, SQL",salary:"13 LPA",description:"Develop enterprise backend systems."},
{id:78,title:"Software Engineer",company:"Flipkart",location:"Bangalore",domain:"Software Development",type:"Full-time",skills:"Java, Spring",salary:"15 LPA",description:"Build scalable e-commerce systems."},
{id:79,title:"HR Executive",company:"Cognizant",location:"Pune",domain:"HR Executive",type:"Full-time",skills:"Recruitment, HRMS",salary:"6 LPA",description:"Handle HR operations and onboarding."},
{id:80,title:"Finance Analyst",company:"EY",location:"Gurgaon",domain:"Finance",type:"Full-time",skills:"Excel, Data Analytics",salary:"9 LPA",description:"Evaluate company performance metrics."},
{id:81,title:"Software Intern",company:"Infosys",location:"Hyderabad",domain:"Software Development",type:"Internship",skills:"JavaScript, APIs",salary:"15K/month",description: "Support AWS clients with cloud queries."

},
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilters.location === "" ||
        job.location === selectedFilters.location) &&
      (selectedFilters.domain === "" ||
        job.domain === selectedFilters.domain) &&
      (selectedFilters.type === "" || job.type === selectedFilters.type)
  );

  const clearFilters = () => {
    setSelectedFilters({ location: "", domain: "", type: "" });
    setSearchTerm("");
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      jobTitle: selectedJob.title,
      company: selectedJob.company,
      ...formData,
    };

    setAppliedJobs([...appliedJobs, newApplication]);
    setShowApplyModal(false);
    setFormData({ name: "", email: "", resume: "" });
    alert("✅ Application submitted successfully!");
  };

  return (
    <div className="job-container">
      {/* Header */}
      <header className="job-header">
        <h2>Job Portal</h2>
        <div className="header-buttons">
          <button
            className="header-btn"
            onClick={() => setShowApplications(!showApplications)}
          >
            My Applications
          </button>
          <button
            className="header-btn logout-btn"
            onClick={() => alert("Logged out successfully!")}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="job-content">
        {/* Filters */}
        <aside className="job-filters">
          <h3>Filters</h3>

          <div className="filter-card">
            <h4>Location</h4>
            <select
              value={selectedFilters.location}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, location: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Noida">Noida</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Mysuru">Mysuru</option>
              <option value="Kochi">Kochi</option>
              <option value="Surat">Surat</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Shimoga">Shimoga</option>
              
              
              
            </select>
          </div>

          <div className="filter-card">
            <h4>Domain</h4>
            <select
              value={selectedFilters.domain}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, domain: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="Software Development">Software Development</option>
              <option value="Cloud">Cloud</option>
              <option value="Design">Design</option>
              <option value="Digital Marketing Executive">Digital Marketing Executive</option>
              <option value="SEO Specialist">SEO Specialist</option>
              <option value="Project Coordinator">Project Coordinator</option>
              <option value="Visual Designer">Visual Designer</option>
              <option value="Accountant">Accountant</option>
              <option value="Financial Analyst">Financial Analyst</option>
              <option value="HR Executive">HR Executive</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Product Manager">Product Manager</option>
              

            </select>
          </div>

          <div className="filter-card">
            <h4>Job Type</h4>
            <select
              value={selectedFilters.type}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, type: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </aside>

        {/* Job List Section */}
        <main className="job-list-section">
          <div className="job-list-header">
            <h2>Available Jobs</h2>
            <p>Explore jobs that match your skills</p>

            <div className="search-container">
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={clearFilters} className="clear-btn">
                Clear Filters
              </button>
            </div>
          </div>

          {/* Job List */}
          {!showApplications ? (
            <div className="job-list">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <h3>{job.title}</h3>
                    <p>
                      <strong>Company:</strong> {job.company}
                    </p>
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Type:</strong> {job.type}
                    </p>
                    <p>
                      <strong>Domain:</strong> {job.domain}
                    </p>
                    <p>
                      <strong>Skills:</strong> {job.skills}
                    </p>
                    <p>
                      <strong>Salary:</strong> {job.salary}
                    </p>

                    <details>
                      <summary>View Description</summary>
                      <p className="job-desc">{job.description}</p>
                    </details>

                    <button
                      className="apply-btn"
                      onClick={() => handleApply(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <p className="no-jobs">No jobs found.</p>
              )}
            </div>
          ) : (
            <div className="job-list">
              <h3>My Applications</h3>
              {appliedJobs.length > 0 ? (
                appliedJobs.map((app, index) => (
                  <div key={index} className="job-card">
                    <h4>{app.jobTitle}</h4>
                    <p><strong>Company:</strong> {app.company}</p>
                    <p><strong>Name:</strong> {app.name}</p>
                    <p><strong>Email:</strong> {app.email}</p>
                    <p><strong>Resume:</strong> <a href={app.resume}>{app.resume}</a></p>
                  </div>
                ))
              ) : (
                <p>No applications yet.</p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Apply for {selectedJob.title}</h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="url"
                placeholder="Resume Link (Drive / Portfolio)"
                required
                value={formData.resume}
                onChange={(e) =>
                  setFormData({ ...formData, resume: e.target.value })
                }
              />
              <div className="modal-buttons">
                <button type="submit" className="apply-btn">
                  Submit Application
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowApplyModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

