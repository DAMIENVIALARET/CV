import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div id="projects" className="project-section bg-gray-100 rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Startups</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
          {/* BrightPath IP */}
          <ProjectItem
            title="BrightPath IP"
            description="Platform to connect students and help them land internships"
            websiteUrl=""
            githubUrl=""
            listItems={[
              "BrightPath Internship Prep connects students with students/alumni Mentors to gain the skills required to land internships and see them through to success",
              "BrightPath IP is still in development"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
