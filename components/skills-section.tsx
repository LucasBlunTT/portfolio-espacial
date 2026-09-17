'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGit, FaSass } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiStyledcomponents,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiStrapi,
  SiHtml5,
  SiCss3,
  SiDaisyui,
  SiMongodb,
  SiOpenapiinitiative,
  SiKubernetes,
  SiGooglecloud,
  SiGithubactions,
  SiSocketdotio,
} from 'react-icons/si';
import { MdOutlineAccountTree } from 'react-icons/md';
import { RiRobot2Fill } from 'react-icons/ri';
import { GrOracle } from 'react-icons/gr';

const skills = {
  frontend: [
    { name: 'React', level: 90, icon: <FaReact className="text-blue-500" /> },
    {
      name: 'React Native',
      level: 85,
      icon: <FaReact className="text-blue-500" />,
    },
    {
      name: 'Next.js',
      level: 85,
      icon: <SiNextdotjs className="text-gray-300" />,
    },
    {
      name: 'TypeScript',
      level: 90,
      icon: <SiTypescript className="text-blue-500" />,
    },
    {
      name: 'JavaScript',
      level: 95,
      icon: <SiJavascript className="text-yellow-500" />,
    },
    { name: 'SASS', level: 80, icon: <FaSass className="text-pink-500" /> },
    {
      name: 'Tailwind CSS',
      level: 95,
      icon: <SiTailwindcss className="text-blue-400" />,
    },
    {
      name: 'Styled Components',
      level: 85,
      icon: <SiStyledcomponents className="text-pink-400" />,
    },
    {
      name: 'Material UI',
      level: 80,
      icon: <FaReact className="text-blue-500" />,
    },
    { name: 'HTML5', level: 95, icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', level: 90, icon: <SiCss3 className="text-blue-500" /> },
    {
      name: 'DaisyUI',
      level: 75,
      icon: <SiDaisyui className="text-yellow-500" />,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      level: 90,
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: 'Express',
      level: 85,
      icon: <SiExpress className="text-gray-300" />,
    },
    {
      name: 'TypeORM',
      level: 80,
      icon: <SiTypescript className="text-blue-500" />,
    },
    {
      name: 'PostgreSQL',
      level: 85,
      icon: <SiPostgresql className="text-blue-500" />,
    },
    {
      name: 'SQL Server',
      level: 80,
      icon: <SiMysql className="text-orange-500" />,
    },
    { name: 'Oracle', level: 75, icon: <GrOracle className="text-red-500" /> },
    { name: 'MySQL', level: 80, icon: <SiMysql className="text-blue-500" /> },
    {
      name: 'MongoDB',
      level: 80,
      icon: <SiMongodb className="text-green-500" />,
    },
  ],
  api: [
    {
      name: 'RESTful',
      level: 90,
      icon: <SiStrapi className="text-green-500" />,
    },
    {
      name: 'Websockets',
      level: 80,
      icon: <SiSocketdotio className="text-blue-500" />,
    },
    {
      name: 'OpenAPI',
      level: 80,
      icon: <SiOpenapiinitiative className="text-green-500" />,
    },
    {
      name: 'Microsserviços',
      level: 80,
      icon: <MdOutlineAccountTree className="text-purple-400" />,
    },
  ],
  devops: [
    { name: 'Git', level: 95, icon: <FaGit className="text-orange-500" /> },
    { name: 'Docker', level: 85, icon: <FaDocker className="text-blue-500" /> },
    {
      name: 'CI/CD',
      level: 80,
      icon: <SiGithubactions className="text-purple-500" />,
    },
    {
      name: 'Kubernetes',
      level: 70,
      icon: <SiKubernetes className="text-blue-500" />,
    },
    { name: 'GCP', level: 75, icon: <SiGooglecloud className="text-red-500" /> },
    {
      name: 'IA Generativa',
      level: 80,
      icon: <RiRobot2Fill className="text-purple-400" />,
    },
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<
    'frontend' | 'backend' | 'api' | 'devops'
  >('frontend');

  return (
    <section id="skills" className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-4">Habilidades</h2>
      <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
        Aqui estão algumas das minhas habilidades nas quais tenho trabalhado nos
        últimos anos.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="bg-[#0a0a20] inline-flex rounded-lg p-1">
            {['frontend', 'backend', 'api', 'devops'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() =>
                  setActiveTab(tab as 'frontend' | 'backend' | 'api' | 'devops')
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-[#0a0a20] p-6 rounded-lg flex items-center gap-4"
            >
              <div className="text-3xl">{skill.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
