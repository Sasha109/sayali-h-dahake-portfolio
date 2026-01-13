const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Current Role - Product Manager at Codemonk */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Product Manager
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  Codemonk
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Bengaluru, Karnataka
                </p>
              </div>
              <div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  September 2022 – Present
                </span>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Transitioned from QA to Product Management, leading
                cross-functional teams to manage the end-to-end product
                lifecycle. Delivered 10+ cross-functional software products
                across AI, sustainability, IoT, and biotech domains.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Delivered 10+ cross-functional software products across AI, sustainability, IoT, and biotech domains
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Actively planned and executed sprints, review sessions, and daily standups to ensure project milestones were achieved and alignment with project goals was maintained
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Managed and prioritized product backlogs, defined and documented detailed PRDs, and collaborated with stakeholders to align business goals with technical feasibility
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Owned sprint planning, grooming, and sprint reviews to ensure delivery velocity and team alignment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Guided creation of product documentation, onboarding flows, and KPIs for end-user adoption and feedback loops
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous Role - QA Engineer at Codemonk */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  QA Engineer
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  Codemonk
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Bengaluru, Karnataka
                </p>
              </div>
              <div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  September 2022 – December 2022
                </span>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Performed manual testing across web platforms and built
                comprehensive QA documentation. Coordinated with developers to
                reduce bug cycle times and improve pre-release QA processes.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Built QA documentation, bug reports, and test cases using
                      Jira and Notion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Led QA for AI-based candidate evaluation and interview
                      scheduling platform
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous Role - QA Engineer at Kool Kanya */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  QA Engineer
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  Kool Kanya Pvt. Ltd
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Mumbai, Maharashtra
                </p>
              </div>
              <div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  July 2021 – September 2022
                </span>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Managed QA cycles for platforms built on Shopify, Thinkific,
                Ghost CMS, and Tribe community software. Created comprehensive
                test plans, use cases, and regression scripts for multiple
                feature rollouts.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Liaised with content, marketing, and design teams to align
                      feature quality with campaign goals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Improved QA documentation and mentored junior testers,
                      enhancing team productivity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
