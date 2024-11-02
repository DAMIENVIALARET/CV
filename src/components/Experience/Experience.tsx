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
              logoUrl="https://media.licdn.com/dms/image/v2/D560BAQF6txeHnXUU2Q/company-logo_200_200/company-logo_200_200/0/1688566052352/bmo_capital_markets_logo?e=1738800000&v=beta&t=1iL5qWGwTiAFTqMSedTD7zKyZWU03ugMXoeuzxcQURQ"
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
              logoUrl="https://media.licdn.com/dms/image/v2/D560BAQGx2sArNKVDLw/company-logo_100_100/company-logo_100_100/0/1718999423222/scotiabank_logo?e=1738800000&v=beta&t=UBNjNTvxrd-_L-4JKBy1MJebXbVSNHjZKmSWZiviQSc"
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
              logoUrl="https://media.licdn.com/dms/image/v2/C560BAQEQ_43Ev8n08Q/company-logo_100_100/company-logo_100_100/0/1631312175506?e=1738800000&v=beta&t=1TYfOUyri6mA5Mj9Vzrgaodbmx9kCEmPkvd89LPCdDY"
              websiteUrl="https://telfer.uottawa.ca/en/"
            />

              {/* BMO P&BB Experience */}
            <ExperienceCard
              title="Service Rep"
              company="Bank of Montreal"
              location="Ottawa, ON"
              dateRange="Jan 2023 – Dec 2023"
              description={[
                "Won 3Q23 Spotlight Award, leading the Ottawa East Market with 540.4% Sales Achievement",
                "Advised 500+ clients regarding investment and credit decisions (obtained IFC certification to advise on Mutual Funds, paid for by BMO)",
                "Delivered outstanding results to the team while working in a fast-paced environment",
                "Learned how to understand client needs and match them with the right products, creating optimal outcomes for both clients and the bank"
              ]}
              logoUrl="https://media.licdn.com/dms/image/v2/D4E0BAQEvomVaVzasOg/company-logo_100_100/company-logo_100_100/0/1719928466334/bank_of_montreal_logo?e=1738800000&v=beta&t=_7KvGIpFe5ONgkVVbt7XJma9ClwQWkqA7GHr2NL3-sA"
              websiteUrl="https://www.bmo.com/en-ca/main/personal/"
            />

            {/* Department of Justive Canada Experience 2 */}
            <ExperienceCard
              title="Accounts Receivable Analyst"
              company="Department of Justice Canada"
              location="Ottawa, ON"
              dateRange="Jan 2022 – Dec 2022"
              description={[
                "Managed department-wide AR accounts, ensured balanced books, and resolved discrepancies for both internal and external clients",
                "Optimized workflow efficiency through the development of financial models and interactive dashboards"
              ]}
              logoUrl="https://media.licdn.com/dms/image/v2/C560BAQHosBetXPdPZg/company-logo_100_100-alternative/company-logo_100_100-alternative/0/1630635501261/justicecanada_logo?e=1738800000&v=beta&t=NDAd-rxoZjhPe-BY6LhEuKgLO5JL-N0kVnuijt64aaY"
              websiteUrl="https://www.justice.gc.ca/eng/"
            />

            {/* Department of Justive Canada Experience 1 (Last) */}
            <ExperienceCard
              last
              title="Financial Assistant"
              company="Department of Justice Canada"
              location="Ottawa, ON"
              dateRange="Jun 2021 – Jan 2022"
              description={[
                "Conducted a comprehensive department-wide budget analysis encompassing all cost centers across each branch",
                "Analyzed data to pinpoint anomalies stemming from the impact of the COVID-19 pandemic"
              ]}
              logoUrl="https://media.licdn.com/dms/image/v2/C560BAQHosBetXPdPZg/company-logo_100_100-alternative/company-logo_100_100-alternative/0/1630635501261/justicecanada_logo?e=1738800000&v=beta&t=NDAd-rxoZjhPe-BY6LhEuKgLO5JL-N0kVnuijt64aaY"
              websiteUrl="https://www.justice.gc.ca/eng/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
