import React from "react";
import { FaGithub } from "react-icons/fa6";
interface ProjectCardProps {
  descriptor: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  descriptor,
  title,
  description,
  image,
  techStack,
  repoLink,
}) => {
  return (
    <div className="bg-ct-grey rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <span className="text-sm font-semibold text-ct-orange rounded-md">
          {descriptor}
        </span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end items-end mt-4">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ct-orange hover:underline flex items-center"
              >
              <div className="rounded-full border border-gray-300 p-2 hover:border-ct-orange transition">
              <FaGithub className="inline-block text-2xl" />
                </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
