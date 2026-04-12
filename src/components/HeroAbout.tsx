import { useEffect, useState } from "react";

const HeroAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sayali_H_Dahake_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    "Product Management & Delivery": [
      "End-to-End Product Lifecycle (Discovery → Delivery → Scale)",
      "SDLC | Agile | Scrum",
      "Roadmap Planning & Release Management",
      "Feature Prioritization",
      "Sprint Planning, Backlog Grooming & Retrospectives",
      "PRD / BRD Creation & Acceptance Criteria",
      "MVP Definition & Iterative Delivery",
      "Risk, Dependency & Change Request Management",
      "JIRA & Notion",
      "Cross-functional Delivery (Dev, QA, Design, ML)",
    ],
    "Product Strategy, GTM & User Research": [
      "Product Strategy & Vision Definition",
      "Go-To-Market (GTM) Strategy & Launch Readiness",
      "Market Research & Competitive Analysis",
      "User Research (Qualitative & Quantitative)",
      "Requirement Gathering & Stakeholder Workshops",
      "Value Proposition & Feature Positioning",
      "Client & Enterprise User Communication",
      "User Adoption & Onboarding Optimization",
    ],
    "Analytics, Technical & Stakeholder Leadership": [
      "KPI Mapping",
      "A/B Testing",
      "Effort Estimation & Capacity Planning",
      "SQL (Basics) & Excel",
      "API Understanding & Postman (PM-level)",
      "AI / ML & Data-Intensive Product Exposure",
      "SaaS & B2B Platform Experience",
      "Stakeholder Management & Executive Reporting",
      "Delivery Governance & Quality Mindset",
    ],
    Certifications: [
      "Google Project Management Certificate (2024)",
      "Microsoft Azure Cloud Services (2025)",
      "Microsoft Business Analyst (2025)",
      "German Language A1 Level (2020)",
    ],
  };

  return (
    <section
      id="home"
      className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Column: Photo + Stats */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    {!imageError ? (
                      <img
                        src="/profile-photo.jpg"
                        alt="Sayali Hemant Dahake"
                        className="w-full h-full object-cover rounded-full"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                        <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-sm text-center">Add photo to public/profile-photo.jpg</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.7+</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Years</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Overall Experience</div>
              </div>
              {/* Card 2 */}
              <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3.5+</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Years</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Product Management</div>
              </div>
              {/* Card 3 */}
              <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Products</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI & SaaS Platforms</div>
              </div>
              {/* Card 4 */}
              <div className="col-span-2 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">Domains</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
                  AI Platforms • Enterprise SaaS • Computer Vision • Sustainability Tech • GovTech • Data & Analytics
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 md:pt-4">
            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                <span className="block">Sayali Hemant</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Dahake
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium">
                Product Manager
              </p>
            </div>

            {/* Bio Paragraph */}
            <div className="max-w-2xl">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Product Manager with 4.7 years of overall experience and 3.5 years specializing in product management — delivering scalable B2B/B2C software products across AI, SaaS, sustainability, and enterprise domains. Based in Bengaluru, currently at Codemonk, with a background in QA that brings a strong quality and execution mindset to every product.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={category}
                  className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="inline-block bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <a
                href="mailto:saylidahake1998@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="Email Sayali"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium break-all sm:break-normal">saylidahake1998@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sayli-dahake-ab016a212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Resume Button */}
            <div className="flex justify-start md:justify-center">
              <button
                onClick={handleDownloadResume}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Download resume"
              >
                <svg className="w-6 h-6 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;

