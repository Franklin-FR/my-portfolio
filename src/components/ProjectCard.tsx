import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import type { IconType } from 'react-icons';

type ProjectProps = {
  title: string;
  description: string;
  techIcons: IconType[];
  githubLink: string;
  liveLink: string;
  bgImage?: string;
};

const ProjectCard = ({
  title,
  description,
  techIcons,
  githubLink,
  liveLink,
  bgImage,
}: ProjectProps) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md group transition-all duration-300 min-h-[320px] flex flex-col justify-between"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-80 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold font-poppins text-white mb-2">{title}</h3>
          <p className="text-white font-poppins text-sm mb-4">{description}</p>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {techIcons.map((Icon, idx) => (
              <div key={idx} className="w-8 h-8 text-white">
                <Icon className="w-full h-full" />
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-white hover:text-gray-300" />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-2xl text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

