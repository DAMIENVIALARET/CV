import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="bg-gray-50 sm:px-1 md:px-5 xl:px-20 rounded-lg"
    >
      <div className="container py-4">
        <div className="flex flex-col lg:flex-row first-letter">
          {/* Experience Header */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl font-light ml-5 pb-4">Experience</h2>
          </div>

          {/* Timeline Content */}
          <div className="w-full lg:w-3/4 relative">
            {/* BMO Capital Markets Experience (First) */}
            <ExperienceCard
              first
              title="Analyst, Collateral Management Group"
              company="BMO Capital Markets"
              location="Toronto, ON"
              dateRange="May 2024 - Aug 2024"
              description={[
                "Performed daily functions to manage margining on unilateral and bilateral trades with call volumes reaching ~$4B",
                "Communicated with publicly traded companies and prepared risk reports for the bank’s upper management",
                "Pitched a Proactive Portfolio Reconciliation System (functioning VBA/full wireframe/walkthrough) to Managing Director, Director, and Manager, focusing on report automation, data efficiency, and operational risk reduction",
                "Expanded my network by engaging with key banking partners, including Capital Markets MDs and VPs"
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/neonlogo.png"
              websiteUrl="https://capitalmarkets.bmo.com/en/"
            />

            {/* Scotiabank Experience */}
            <ExperienceCard
              title="Commercial Banking Analyst"
              company="Scotiabank"
              location="Ottawa, ON"
              dateRange="Jan 2024 - Apr 2024"
              description={[
                "Managed a portfolio of companies with annual revenues of up to $1.1B, servicing 20+ credit requests, analyzing 50+ financial statements, conducting 10+ annual reviews, and successfully completing 2 full client onboardings",
                "Lead the Benchmark Rate Reform (CORRA transition) on a book of ~$200MM+ of loans and swaps",
                "Automated processes using Excel VBA and complex data mapping",
                "Received recognition from Directors & Senior VP for “passion and work ethic"
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/skyworkslogo.png"
              websiteUrl="https://www.scotiabank.com/ca/en/commercial-banking.html"
            />

            {/* TA Experience */}
            <ExperienceCard
              title="Teaching Assistant - Financial Management"
              company="Telfer School of Management"
              location="Ottawa, ON"
              dateRange="Sept 2023 – Dec 2023"
              description={[
                "Provided 5 final exam review sessions, covering complex finance concepts and practice problems (200 students each)",
                "Held 12 office hours, helping students understand fundamental finance concepts (8-15 students each)",
                "Tutored students one-on-one to solve/understand technical questions",
                "Gave back to younger students by teaching/sharing knowledge acquired throughout school and work experiences"
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/gbatterieslogo.png"
              websiteUrl="https://telfer.uottawa.ca/en/"
            />

              {/* BMO P&BB Experience */}
            <ExperienceCard
              title="Teaching Assistant - Financial Management"
              company="Telfer School of Management"
              location="Ottawa, ON"
              dateRange="Sept 2023 – Dec 2023"
              description={[
                "Provided 5 final exam review sessions, covering complex finance concepts and practice problems (200 students each)",
                "Held 12 office hours, helping students understand fundamental finance concepts (8-15 students each)",
                "Tutored students one-on-one to solve/understand technical questions",
                "Gave back to younger students by teaching/sharing knowledge acquired throughout school and work experiences"
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/gbatterieslogo.png"
              websiteUrl="https://www.bmo.com/en-ca/main/personal/"
            />

            {/* Department of Justive Canada Experience */}
            <ExperienceCard
              title="Teaching Assistant - Financial Management"
              company="Telfer School of Management"
              location="Ottawa, ON"
              dateRange="Sept 2023 – Dec 2023"
              description={[
                "Provided 5 final exam review sessions, covering complex finance concepts and practice problems (200 students each)",
                "Held 12 office hours, helping students understand fundamental finance concepts (8-15 students each)",
                "Tutored students one-on-one to solve/understand technical questions",
                "Gave back to younger students by teaching/sharing knowledge acquired throughout school and work experiences"
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/gbatterieslogo.png"
              websiteUrl="https://www.justice.gc.ca/eng/"
            />

            {/* Department of Justive Canada Experience (Last) */}
            <ExperienceCard
              last
              title="Junior Data Scientist, National Project Oversight Branch"
              company="Public Services and Procurement Canada"
              location="Quebec, QC"
              dateRange="April 2022 – September 2022"
              description={[
                "Developed an automated review system for the National Project Management System to provide early warnings for projects at risk of exceeding time, budget, or scope constraints, reducing quarterly review exercise timeline from over 60 hours to approximately 5 minutes",
                "Created a comprehensive dashboard to visualize project data, highlighting trends across projects, regions, and project managers",
                "Worked extensively with large, complex datasets in the project management and financial industry"
              ]}
              logoUrl="https://samharrison-portfolio.s3.us-east-2.amazonaws.com/pspclogo.png"
              websiteUrl="https://www.justice.gc.ca/eng/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
