const Skills = () => {
  const skills = [
    {
      category: "Discovery & Research",
      icon: "🔍",
      items: [
        "User Persona Definition",
        "Problem Statement Framing",
        "Requirements Gathering & Scoping",
      ],
    },
    {
      category: "Prioritization & Strategy",
      icon: "🎯",
      items: [
        "MoSCoW Framework",
        "Phased Roadmap Planning",
        "Feature Scoping & Trade-off Analysis",
        "MVP Definition & Iterative Delivery",
      ],
    },
    {
      category: "Execution & Delivery",
      icon: "⚙️",
      items: [
        "PRD / BRD Writing & Acceptance Criteria",
        "Sprint Planning, Grooming & Retrospectives",
        "Cross-functional Team Coordination",
        "Milestone & Risk Management",
        "UAT Planning & Sign-off",
        "Release Readiness & Deployment Governance",
        "Post Go-Live Maintenance",
      ],
    },
    {
      category: "Metrics & Analytics",
      icon: "📊",
      items: [
        "KPI & Success Metric Definition",
        "Production Monitoring & Post-Release Tracking",
        "Feature Adoption Tracking",
        "Feedback Loop Design",
        "Data-Driven Iteration",
      ],
    },
    {
      category: "AI & Technical Fluency",
      icon: "🤖",
      items: [
        "ML Model Evaluation & Scoping",
        "Computer Vision Product Delivery",
        "API-First Product Design",
        "Working with Engineering on Technical Trade-offs",
        "B2B SaaS Platform Experience",
      ],
    },
    {
      category: "Tools",
      icon: "🛠️",
      items: [
        "Jira",
        "Notion",
        "Postman",
        "SQL (Basics) & Excel",
        "Google Analytics",
      ],
    },
  ];

  const certifications = [
    "Google Project Management Certificate (2024)",
    "Microsoft Azure Fundamentals (2025)",
    "Microsoft Business Analyst – Professional (2025)",
    "German Language A1 Certification (2020)",
  ];

  return (
    <section
      id="skills"
      className="py-14 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What I bring to the table — and what I've actually applied on the job
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" aria-hidden="true">{group.icon}</span>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Strip */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl" aria-hidden="true">🎓</span>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Certifications
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="inline-block bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

