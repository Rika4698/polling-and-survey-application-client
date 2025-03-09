

const AboutUs = () => {
    return (
      <div>
       

    
    <div className="min-h-screen bg-lime-100 py-12 sm:py-16 lg:py-16 mt-28 md:mt-32 overflow-x-hidden dark:bg-slate-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 min-h-screen">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-serif font-semibold text-orange-700 underline mb-4 dark:text-orange-100">
            Welcome to Our Survey Swift!
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6 font-medium dark:text-gray-400">
          Our platform aims to provide a seamless experience for creating, managing, and participating in surveys and polls. 🚀
          We strive to empower users to gather insights and make informed decisions through our feature-rich application. 📊
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              About Our Team
            </h4>
            <p className="text-base text-gray-700 mb-4">
              Our dedicated team of developers, designers, and innovators are passionate about building intuitive and impactful tools for our users. We take pride in our work, and our clients are satisfied with the results.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features 🔑:
            </h4>
            <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
            <li>🎨 Create customized surveys with various question types</li>
              <li>📈 Real-time voting and result analysis</li>
              <li>👥 User-friendly interface for participants</li>
              <li>📚 Surveys available in many categories</li>
              <li>💎 Users can become Pro members for additional features</li>
              <li>✨ Additional features for enhanced survey management</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center space-y-6 bg-slate-100 dark:bg-slate-700 ">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium pt-3 dark:text-gray-300">
          Our application aims to provide an intuitive experience for both survey creators and respondents, ensuring easy access to valuable insights and data analysis. 📊
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium pb-3 dark:text-gray-300">
          Our application is dedicated to fostering engagement, driving decision-making based on data-driven insights, and simplifying the survey creation process for users of all backgrounds. 🤝
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutUs;