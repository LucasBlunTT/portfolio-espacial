'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';
import projectNeon from '@/assets/neon.png';
import whatIf from '@/assets/whatif.png';

const projects = [
  {
    id: 1,
    title: 'Manager PACS API',
    description:
      'API desenvolvida em TypeScript para gerenciamento de sistemas PACS (Picture Archiving and Communication System) na área médica. Implementa autenticação, gerenciamento de usuários e integração com sistemas de imagens médicas.',
    tags: ['TypeScript', 'Node.js', 'Express', 'API REST', 'PostgreSQL'],
    githubLink: 'https://github.com/LucasBlunTT/manager-pacs-api',
    imageUrl: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 2,
    title: 'Projeto Guarda-Chuva API',
    description:
      'API para sistema de gerenciamento de farmácias, desenvolvida com TypeScript e Node.js. Implementa funcionalidades como cadastro de medicamentos, controle de estoque e gerenciamento de vendas.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/LucasBlunTT/projeto-guarda-chuva-API',
    imageUrl: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 3,
    title: 'What If - CodeBoost',
    description:
      "Projeto front-end inspirado no universo Marvel 'What If', desenvolvido durante o curso CodeBoost. Utiliza React com animações avançadas e design responsivo.",
    tags: ['React', 'Styled Components', 'Framer Motion', 'API Integration'],
    githubLink: 'https://github.com/LucasBlunTT/whatif-codeboost',
    imageUrl: whatIf,
    featured: true,
  },
  {
    id: 4,
    title: 'Projeto Neon',
    description:
      'Clone do site do banco Neon, desenvolvido com foco em UI/UX e animações. Implementa design responsivo e técnicas modernas de CSS.',
    tags: ['HTML', 'SASS', 'JavaScript', 'Animações', 'Responsivo'],
    githubLink: 'https://github.com/LucasBlunTT/projeto-neon',
    imageUrl: projectNeon,
    featured: true,
  },
  {
    id: 5,
    title: 'API Avalia Aqui',
    description:
      'API para sistema de avaliações de produtos e serviços, permitindo que usuários compartilhem suas experiências e notas.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/LucasBlunTT/api-avalia-aqui',
    imageUrl: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 6,
    title: 'Vitrine Medicamentos API',
    description:
      'API para exibição e busca de medicamentos, com informações detalhadas sobre cada produto, incluindo bulas e contraindicações.',
    tags: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    githubLink: 'https://github.com/LucasBlunTT/VitrineMedicamentos-API',
    imageUrl: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'front' | 'back'>('front');

  const filteredProjects =
    filter === 'front'
      ? projects.filter((project) => project.featured === true)
      : projects.filter((project) => project.featured === false);

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-16 relative z-10"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Projetos</h2>
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
        Conheça alguns dos meus principais projetos desenvolvidos recentemente.
      </p>

      <div className="flex justify-center mb-12">
        <div className="bg-[#0a0a20] inline-flex rounded-lg p-1">
          <button
            className={`px-6 py-3 rounded-lg transition-all ${
              filter === 'front'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setFilter('front')}
          >
            FRONT-END
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all ${
              filter === 'back'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setFilter('back')}
          >
            BACK-END
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
