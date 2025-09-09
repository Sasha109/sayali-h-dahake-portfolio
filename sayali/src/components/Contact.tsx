const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <a
              href="tel:+919370497557"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 group transform hover:-translate-y-1"
              aria-label="Call Sayali"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all sm:break-normal">
                +91-9370497557
              </p>
            </a>

            <a
              href="mailto:saylidahake1998@gmail.com"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 group transform hover:-translate-y-1"
              aria-label="Email Sayali"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm break-all">
                saylidahake1998@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/sayli-dahake-ab016a212"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 group transform hover:-translate-y-1"
              aria-label="Visit Sayali's LinkedIn profile"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
