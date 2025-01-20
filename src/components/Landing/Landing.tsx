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
            <a
              href="https://www.linkedin.com/in/damienadamsvialaret/"
              className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
            >
              <i className="fab fa-linkedin hover:scale-110"></i>
            </a>
            <a
              href="CV_Damien Adams Vialaret.pdf"
              className="text-2xl mx-2 text-gray-600 hover:text-gray-600"
            >
              <i className="fas fa-file-pdf hover:scale-110"></i>
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
            I am a 4th year student graduating this December 2024 with a Bachelor of Commerce in Finance.
            I've acquired industry experience through a rotation of internships, including placements in commercial banking and capital markets.
            I am driven by curiosity and eagerness to innovate. I also love expanding my network and working in team settings.
          </p>
          <div className="flex flex-wrap mt-8">
          <div className="w-full md:w-1/2 pr-5 mb-4">
            <h3 className="text-lg md:text-xl font-light">Education</h3>
            <ul className="list-none mt-2 space-y-2">
              <li className="text-sm md:text-base">
                <i className="fas fa-graduation-cap text-gray-600 mr-2"></i>
                <span className="font-semibold">BCom in Finance, University of Ottawa</span>
                <p className="text-sm text-gray-600 pl-6 font-light leading-relaxed">Sep 2020 - Pres</p>
                <p className="text-sm text-gray-600 pl-6 font-light leading-relaxed">
                <span className="font-semibold">TGPA:</span> 9.25/10.00, Dean's Honour Role
                </p>
                <p className="text-sm text-gray-600 pl-6 font-light leading-relaxed">
                <span className="font-semibold">Scholarships:</span> French Studies Bursary
                </p>
                <p className="text-sm text-gray-600 pl-6 font-light leading-relaxed">
                <span className="font-semibold">Relevant Coursework:</span>
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 pl-10 font-light leading-relaxed">
                      <li>Equity Valuation (A)</li>
                      <li>Options & Futures (A)</li>
                      <li>Fixed Income (A+)</li>
                      <li>Financial Modeling (A+)</li>
                      <li>Fintech (A+)</li>
                      <li>Int Financial Mgnt (A+)</li>
                      <li>Money & Banking (A)</li>
                      <li>Finance Ethics (A)</li>
                      <li>Portfolio Mgnt (A-)</li>
                      <li>Corporate Finance (A-)</li>
                      <li>Finance Theory (A-)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 pr-5 mb-4">
              <h3 className="text-lg md:text-xl font-light">Certifications</h3>
              <ul className="list-none mt-2 space-y-2">
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 mr-2"></i>
                  <span className="font-semibold">CFA Institute, Level I Candidate</span>
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">Exp Feb 2025</p>
                </li>
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 mr-2"></i>
                  <span className="font-semibold">Investment Funds in Canada, Moody's</span>
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">Issued Jun 2023</p>
                </li>
                <li className="text-xs md:text-sm">
                  <i className="fas fa-trophy text-gray-600 mr-2"></i>
                  <span className="font-semibold">Bloomberg Market Concepts, Bloomberg</span>
                  <p className="text-xs md:text-sm text-gray-600 pl-7 font-light">Issued Jun 2023</p>
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
