import React from "react";
import SkillGroup from "./SkillGroup";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
      <div className="container mx-auto py-4">
        <div className="text-center">
          <h1 className="text-2xl font-light pb-4">Skills</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
          <SkillGroup
            title="Financial Databases"
            skills={[
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/C4D0BAQF0uyE7RGKDGg/company-logo_100_100/company-logo_100_100/0/1631374698859/bloomberg_lp_logo?e=1738800000&v=beta&t=y-ioVsCX7us8KiWu1i0ZjzDJxgx_PItgNRwPaMFbZxw",
                iconAlt: "Bloobmerg Logo",
                name: "Bloomberg",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/C4D0BAQE9P6lrAqMSyg/company-logo_100_100/company-logo_100_100/0/1657012106987/spglobal_logo?e=1738800000&v=beta&t=aqkkXvT08-eZDOVZZFTf-V5JGerzuqsVH7A8hRjQz7I",
                iconAlt: "CapIQ Logo",
                name: "S&P CapIQ",
              },
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/D560BAQFadXv-CELWtw/company-logo_100_100/company-logo_100_100/0/1689117141980/ibisworld_logo?e=1738800000&v=beta&t=eofBtGhQm5EsP8ZwNo8fszNOiRz3o8gABqC7B-cTF3c",
                iconAlt: "IBIS World Logo",
                name: "IBIS World",
              },
            ]}
          />
          <SkillGroup
            title="Financial Programming"
            skills={[
              {
                iconSrc:
                  "https://media.licdn.com/dms/image/v2/D4D07AQH4Vb5mo5Ix-Q/group-logo_image-shrink_92x92/group-logo_image-shrink_92x92/0/1673686628759?e=1731132000&v=beta&t=tKMMtXkuZ228_nUbRQhhGmVWVnC1q7IbL6P7eiJxDu0",
                iconAlt: "VBA Logo",
                name: "VBA",
              },
              {
                iconSrc:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                iconAlt: "Python Logo",
                name: "Python",
              },
            ]}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
