import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Safety Solution",
      category: "Computer Vision Platform",
      description:
        "Led the development of a vision-based safety monitoring tool that detects 16+ safety violations using YOLOv7 computer vision technology for real-time workplace safety compliance.",
      achievements: [
        "Implemented advanced computer vision algorithms for real-time safety violation detection",
        "Developed comprehensive safety rule engine supporting 16+ different violation types",
        "Created real-time alert system with dashboard for safety managers and supervisors",
        "Achieved 95%+ accuracy in safety violation detection across multiple industrial environments",
      ],
      technologies: [
        "YOLOv7",
        "Computer Vision",
        "Python",
        "Real-time Processing",
        "Safety Analytics",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Carbon Platform",
      category: "Sustainability Dashboard",
      description:
        "Developed a real-time carbon monitoring and reduction platform providing comprehensive analytics and actionable insights for environmental sustainability initiatives.",
      achievements: [
        "Built real-time carbon emission tracking and monitoring dashboard",
        "Implemented data visualization for carbon footprint analysis and reduction strategies",
        "Created automated reporting system for sustainability compliance and ESG metrics",
        "Integrated with multiple data sources for comprehensive environmental impact assessment",
      ],
      technologies: [
        "Real-time Analytics",
        "Data Visualization",
        "Sustainability Metrics",
        "Dashboard Development",
        "ESG Reporting",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Biotech Investor Portal",
      category: "Government Platform",
      description:
        "Led the development of a comprehensive platform connecting biotech startups with mentors and investors, specifically designed for the Government of India's startup ecosystem.",
      achievements: [
        "Created multi-stakeholder platform connecting biotech startups with mentors and investors",
        "Implemented advanced matching algorithms for startup-investor pairing",
        "Built comprehensive startup profile management and document sharing system",
        "Developed real-time communication and collaboration tools for the biotech ecosystem",
      ],
      technologies: [
        "Startup Ecosystem",
        "Matching Algorithms",
        "Multi-stakeholder Platform",
        "Government Integration",
        "Biotech Domain",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Smart AC Buyer Platform",
      category: "Energy Efficiency Tool",
      description:
        "Developed an intelligent platform that recommends air conditioners based on energy usage patterns and carbon impact analysis, helping consumers make sustainable purchasing decisions.",
      achievements: [
        "Built AI-powered recommendation engine for energy-efficient AC selection",
        "Implemented carbon footprint calculation and environmental impact assessment",
        "Created user-friendly interface with energy consumption predictions and cost analysis",
        "Integrated real-time energy pricing and sustainability metrics for informed decision making",
      ],
      technologies: [
        "AI Recommendations",
        "Energy Efficiency",
        "Carbon Footprint",
        "Consumer Analytics",
        "Sustainability",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Image Analytics Platform",
      category: "Surveillance System",
      description:
        "Developed a comprehensive real-time object and people detection and tracking platform for surveillance applications with advanced analytics and reporting capabilities.",
      achievements: [
        "Implemented real-time object detection and people tracking for surveillance systems",
        "Built advanced analytics dashboard with customizable reporting and alert systems",
        "Created scalable architecture supporting multiple camera feeds and concurrent processing",
        "Developed intelligent filtering and search capabilities for surveillance footage analysis",
      ],
      technologies: [
        "Real-time Processing",
        "Object Detection",
        "Surveillance Analytics",
        "Multi-camera Support",
        "Video Analytics",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "3D Point Cloud Editor",
      category: "Infrastructure Modeling",
      description:
        "Led the development of a sophisticated 3D point cloud editing platform for infrastructure modeling and 3D model generation, supporting large-scale construction and engineering projects.",
      achievements: [
        "Built advanced 3D point cloud processing and editing capabilities",
        "Implemented real-time 3D visualization and manipulation tools",
        "Created infrastructure modeling workflows for construction and engineering applications",
        "Developed scalable architecture for handling large-scale point cloud datasets",
      ],
      technologies: [
        "3D Processing",
        "Point Cloud Editing",
        "Infrastructure Modeling",
        "3D Visualization",
        "Engineering Tools",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of the innovative products I've led and delivered across
            AI, sustainability, and biotech domains
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-8 min-h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
                    aria-label={`Visit ${project.title} project`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Project Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {project.achievements
                    .slice(
                      0,
                      hoveredProject === index ? project.achievements.length : 2
                    )
                    .map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start text-xs text-gray-600 dark:text-gray-400"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  {project.achievements.length > 2 &&
                    hoveredProject !== index && (
                      <li className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        +{project.achievements.length - 2} more achievements...
                      </li>
                    )}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-200 dark:border-gray-600 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
