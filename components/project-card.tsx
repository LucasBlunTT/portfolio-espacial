'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  imageUrl: string | StaticImageData;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubLink,
  liveLink,
  imageUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#0a0a20] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a20] to-transparent opacity-70"></div>

        <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
              aria-label={`Ver código do projeto ${title} no GitHub`}
            >
              <Github size={18} />
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
                aria-label={`Ver demonstração do projeto ${title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
