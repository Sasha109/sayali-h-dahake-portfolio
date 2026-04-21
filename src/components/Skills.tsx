const Skills = () => {
  const skills = [
    {
      category: "Discovery & Research",
      icon: "🔍",
      items: [
        "Stakeholder Interviews & Workshops",
        "User Research & Persona Definition",
        "Jobs-to-be-Done (JTBD) Framework",
        "Problem Statement Framing",
        "Competitive & Market Analysis",
        "Journey Mapping",
      ],
    },
    {
      category: "Prioritization & Strategy",
      icon: "🎯",
      items: [
        "RICE Scoring",
        "MoSCoW Framework",
        "ICE Scoring",
        "Kano Model",
        "OKR Definition",
        "Phased Roadmap Planning",
      ],
    },
    {
      category: "Execution & Delivery",
      icon: "⚙️",
      items: [
        "PRD Writing & Documentation",
        "Sprint Planning & Grooming",
        "Cross-functional Team Coordination",
        "Milestone & Risk Management",
        "UAT Planning & Sign-off",
        "Go-to-Market Planning",
      ],
    },
    {
      category: "Metrics & Analytics",
      icon: "📊",
      items: [
        "KPI & Success Metric Definition",
        "Funnel Analysis",
        "Feature Adoption Tracking",
        "A/B Testing Frameworks",
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
        "Edge AI Deployment (Conceptual)",
        "Working with Engineering on Technical Trade-offs",
        "NLP & Semantic Search Products",
      ],
    },
    {
      category: "Tools",
      icon: "🛠️",
      items: [
        "Jira",
        "Notion",
        "Figma",
        "Miro",
        "Confluence",
        "Linear",
        "Google Analytics",
        "Mixpanel (Conceptual)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Methods
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The frameworks, methods, and tools I use across the full product lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Skills;
