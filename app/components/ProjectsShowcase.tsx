import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../assets/data/projects";

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-12 bg-ct-orange">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              descriptor={project.descriptor}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              repoLink={project.repoLink}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
