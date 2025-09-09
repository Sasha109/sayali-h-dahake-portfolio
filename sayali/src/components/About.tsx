import { useState } from "react";

const About = () => {
  const [imageError, setImageError] = useState(false);

  const skills = {
    "Product Management": [
      "SDLC",
      "GTM Strategy",
      "Agile",
      "Scrum",
      "Roadmap",
      "Feature Prioritization",
      "JIRA",
      "Postman",
      "Sprint Planning",
      "PRD Creation",
    ],
    "Business Analytics": [
      "KPI Metrics",
      "MySQL (Basics)",
      "Requirement Gathering",
      "Market Research",
      "Effort Estimation",
      "Client Communication",
      "A/B Testing",
      "Data Analysis",
    ],
    "Technical Skills": [
      "Product Strategy",
      "Cross-functional Leadership",
      "Stakeholder Management",
      "User Research",
      "Competitive Analysis",
      "Product Documentation",
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
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 right-20 w-12 h-12 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 border-2 border-purple-400/20 animate-pulse"></div>

        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-2/5 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-3/5 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-0 left-4/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-500"></div>

          <div className="absolute top-1/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute top-2/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse delay-2500"></div>
          <div className="absolute top-3/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-700"></div>
          <div className="absolute top-4/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse delay-1700"></div>
        </div>

        {/* Energy orbs */}
        <div className="absolute top-32 right-1/3 w-6 h-6 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-indigo-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-purple-400/20 rounded-full animate-float delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my skills, background, and what drives my
            passion for development
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-12 h-0.5 bg-gradient-to-r from-indigo-400/40 to-transparent animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-4 w-0.5 h-8 bg-gradient-to-b from-purple-400/40 to-transparent animate-pulse delay-500"></div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 shadow-2xl animate-gradient-shift">
                      <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        {!imageError ? (
                          <img
                            src="/profile-photo.jpg"
                            alt="Sayali H Dahake"
                            className="w-full h-full object-cover rounded-full"
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                            <svg
                              className="w-16 h-16 mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span className="text-sm text-center">
                              Add your photo to
                              <br />
                              public/profile-photo.jpg
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Multiple animated rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full border border-indigo-400/30 animate-pulse delay-500"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Product Manager & Strategic Leader
                    </h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p>
                        I'm a passionate Product Manager with 4+ years of
                        experience in software product development,
                        cross-functional leadership, and Agile execution across
                        SaaS, e-commerce, and AI domains. Based in Bengaluru,
                        I've been delivering scalable B2B/B2C solutions since
                        joining Codemonk in September 2022.
                      </p>
                      <p>
                        My journey in product management has taken me through
                        diverse projects — from building AI-powered safety
                        solutions using computer vision to developing carbon
                        monitoring platforms and biotech investor portals. I
                        excel at aligning technical feasibility with business
                        goals while maintaining strong communication and
                        problem-solving skills.
                      </p>
                      <p>
                        When I'm not strategizing product roadmaps, I'm
                        constantly learning about emerging technologies and
                        market trends. I believe in creating products that not
                        only meet user needs but also drive business growth and
                        innovation.
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        4+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        10+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Products Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Core competencies and tools I leverage to drive product success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200/50 dark:border-gray-700/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/50 via-indigo-400/50 to-purple-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative z-10">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="inline-block bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50/70 dark:hover:bg-blue-900/20 transition-all duration-200 whitespace-nowrap transform hover:scale-105 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100 + skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
