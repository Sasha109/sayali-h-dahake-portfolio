const Languages = () => {
  const languages = [
    { name: "English", proficiency: "Proficient", level: 4 },
    { name: "Hindi", proficiency: "Proficient", level: 4 },
    { name: "Marathi", proficiency: "Native", level: 5 },
    { name: "German", proficiency: "Beginner", level: 2 },
  ];

  return (
    <section
      id="languages"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Languages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Languages I speak and my proficiency levels
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {lang.name}
                    </h3>
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
    </section>
  );
};

export default Languages;
