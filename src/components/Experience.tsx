const Experience = () => {
  return (
    <section
      id="experience"
"py-14 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
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
                Product Manager with 3+ years driving end-to-end delivery of
                AI, SaaS, and enterprise platforms across sustainability,
                computer vision, IoT, and media domains. Led cross-functional
                teams from discovery through production for 10+ B2B products at
                Codemonk.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Impact & Approach
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Owned product execution for 10+ AI and SaaS platforms — from PRD sign-off through MVP, UAT, and production rollout — across computer vision, sustainability, and media domains
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Defined product strategy, success metrics, and prioritization frameworks (scope, phasing, trade-offs) in collaboration with clients, ML teams, and engineering leads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Reduced sprint blockers and improved delivery velocity by owning backlog grooming, sprint planning, and stakeholder alignment — maintaining milestone adherence across parallel product tracks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Led discovery and requirements gathering via stakeholder workshops, client audits, and user research inputs; translated findings into actionable PRDs and phased roadmaps
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span>
                      Built onboarding flows, KPI dashboards, and feedback loops that drove post-launch adoption and informed iterative product improvements
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
                  Started at Codemonk as QA Engineer (Sep–Dec 2022) before
                  transitioning to Product Management full-time.
                </p>
              </div>
            </div>
          </div>

          {/* Previous Role - QA Engineer at Kool Kanya */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow duration-300 opacity-80">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300">
                  QA Engineer
                </h3>
                <p className="text-sm text-blue-500 dark:text-blue-400">
                  Kool Kanya Pvt. Ltd · Mumbai, Maharashtra
                </p>
              </div>
              <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap self-start sm:self-auto">
                July 2021 – September 2022
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
              Managed QA cycles for Shopify, Thinkific, Ghost CMS, and Tribe
              platforms. Built test plans, regression scripts, and bug
              documentation. Foundation for understanding product quality, edge
              cases, and user-impacting bugs before moving into PM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
