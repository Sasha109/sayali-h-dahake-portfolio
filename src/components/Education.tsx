const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational background and qualifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Engineering (BE)
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                    Cummins College of Engineering for Women, RTMNU
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Nagpur, Maharashtra
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Electronics and Telecommunication Engineering
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    August 2016 – June 2020
                  </span>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    GPA: 8.2/10
                  </span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                {[
                  { name: "English", proficiency: "Proficient", level: 4 },
                  { name: "Hindi", proficiency: "Proficient", level: 4 },
                  { name: "Marathi", proficiency: "Native", level: 5 },
                  { name: "German", proficiency: "Beginner", level: 2 },
                ].map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {lang.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {lang.proficiency}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < lang.level
                              ? "bg-blue-600 dark:bg-blue-400"
                              : "bg-gray-300 dark:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
