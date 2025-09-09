import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You'll need to add your resume PDF to the public folder
    link.download = "Sayali_H_Dahake_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Advanced Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-purple-400/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-blue-400/20 rotate-12 animate-ping"></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-2/4 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-2000"></div>

          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse delay-2500"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-60 right-1/4 w-6 h-6 bg-indigo-400/30 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/2 w-3 h-3 bg-purple-400/30 rounded-full animate-float delay-2000"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 dark:from-blue-400/10 dark:to-indigo-400/10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center overflow-hidden">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-2 leading-tight  px-4 max-w-4xl mx-auto">
              <span className="block">Sayali H</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent break-words pb-0 sm:pb-4">
                Dahake
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8 font-medium">
              Product Manager
            </p>

            {/* Brief About Me */}
            <div
              className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Experienced Product Manager with 4+ years in software product
                development, cross-functional leadership, and Agile execution
                across SaaS, e-commerce, and AI domains. Currently delivering
                scalable B2B/B2C solutions at{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Codemonk
                </span>
                , with expertise in product strategy, AI-powered solutions, and
                building platforms that connect startups with mentors and
                investors.
              </p>

              {/* Key Highlights */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  "Product Management",
                  "Agile/Scrum",
                  "AI Solutions",
                  "Cross-functional Leadership",
                ].map((highlight, index) => (
                  <span
                    key={highlight}
                    className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="tel:+919370497557"
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="Call Sayali"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  +91-9370497557
                </span>
              </a>

              <a
                href="mailto:saylidahake1998@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="Email Sayali"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium break-all sm:break-normal">
                  saylidahake1998@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/sayli-dahake-ab016a212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                aria-label="Visit Sayali's LinkedIn profile"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* Resume Download Button */}
            <div
              className={`flex justify-center transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button
                onClick={handleDownloadResume}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg backdrop-blur-sm"
                aria-label="Download resume"
              >
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
