import React from 'react';

const Landing: React.FC = () => {
  return (
<div>
<div id="home" className="container mx-auto first-section py-5 xl:px-40">
      <div className="flex flex-col md:flex-row justify-start items-start pt-5 xl:space-x-16 flex-nowrap">
        {/* Profile Section */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 text-center profile-section mb-10 sm:mb-0 mr-4">
          <img
            src="/DV.png"
            alt="Damien Adams Vialaret"
            className="w-64 h-64 object-cover rounded-full mx-auto"
          />
          <h1 className="mt-2 text-3xl font-light">Damien Adams Vialaret</h1>
          <p className="text-gray-500 text-lg font-light">
            Finance Student
            <br />
            University of Ottawa
          </p>
          <div className="mt-4">
            <a href="https://github.com/DAMIENVIALARET" className="text-2xl mx-2 text-gray-600 hover:text-gray-600">
              <i className="fab fa-github hover:scale-110"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/damienadamsvialaret/"
              className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
            >
              <i className="fab fa-linkedin hover:scale-110"></i>
            </a>
            <a
              href="/CV-SamuelHarrison.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
            >
              <i className="ai ai-cv hover:scale-110"></i>
            </a>
            <a
              href="mailto:vialaretdamien@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
            >
              <i className="fas fa-envelope hover:scale-110"></i>
            </a>
          </div>
        </div>

        {/* Biography Section */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex-grow">
          <h2 className="text-xl md:text-2xl font-light">Biography</h2>
          <p className="text-sm sm:text-base md:text-lg mt-2 font-light ">
            I am 4th year student graduating this December 2024 with a Bachelor of Commerce in Finance.
            I've acquired industry experience trough a rotation of internships, including placements in commercial banking and capital markets.
            I am driven by curiosity and eagerness to innovate, and I love expanding my netwrok and working in team settings.
          </p>
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-1/2 pr-5 mb-4">
              <h3 className="text-lg md:text-xl font-light">Education</h3>
              <ul className="list-none mt-2 space-y-2">
                <li className="text-xs md:text-sm">
                  <i className="fas fa-graduation-cap text-gray-600 hover:text-gray-600"></i> Bcom. in Finance
                  2020 - 2024
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">University of Ottawa</p>
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">GPA: 9.8 / 10.0</p>
                </li>
                <li className="text-xs md:text-sm">
                  <i className="fas fa-graduation-cap text-gray-600 hover:text-gray-600"></i> BASc. in Chemical
                  Engineering, 2020 - 2025
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">University of Ottawa</p>
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">GPA: 9.1 / 10.0</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 pr-5 mb-4">
              <h3 className="text-lg md:text-xl font-light">Accomplishments</h3>
              <ul className="list-none mt-2 space-y-2">
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 hover:text-gray-600"></i> Dean's Honour Roll (Every Year)
                </li>
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 hover:text-gray-600"></i> Dean's Merit Scholarship (Every Semester)
                </li>
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 hover:text-gray-600"></i> Winner of Engineering Capstone Competition
                </li>
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 hover:text-gray-600"></i> French Studies Bursary
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Landing;
