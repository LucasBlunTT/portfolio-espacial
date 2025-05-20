'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { motion } from 'framer-motion';
import { FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJet,
} from 'react-icons/si';

// Importando imagens dos projetos
import projectNeon from '@/assets/neon.png';
import whatIf from '@/assets/whatif.png';
import guardaChuvaApp from '@/assets/guardachuva.png';
import spotifyClone from '@/assets/spotify.png';
import taskListApp from '@/assets/tasklist.png';
import pokemonApi from '@/assets/pokemon.png';
import blizzardProject from '@/assets/diablo.png';
import godOfWar from '@/assets/godofwar.png';
import semFolegoFc from '@/assets/semfolego.png';
import managerPacsFront from '@/assets/managerpacs.png';

const projects = [
  // Back-end projects
  {
    id: 1,
    title: 'Manager PACS API',
    description:
      'API desenvolvida em TypeScript para gerenciamento de sistemas PACS (Picture Archiving and Communication System) na área médica. Implementa autenticação, gerenciamento de usuários e integração com sistemas de imagens médicas.',
    tags: ['TypeScript', 'Node.js', 'Express', 'API REST', 'PostgreSQL'],
    githubLink: 'https://github.com/LucasBlunTT/manager-pacs-api',
    icons: [<SiTypescript />, <FaNodeJs />, <SiExpress />, <SiPostgresql />],
    featured: false,
  },
  {
    id: 2,
    title: 'Projeto Guarda-Chuva API',
    description:
      'API para sistema de gerenciamento de farmácias, desenvolvida com TypeScript e Node.js. Implementa funcionalidades como cadastro de medicamentos, controle de estoque e gerenciamento de vendas.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/LucasBlunTT/projeto-guarda-chuva-API',
    icons: [
      <SiTypescript />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
      <SiJet />,
    ],
    featured: false,
  },

  // Front-end projects
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
    title: 'App Guarda-Chuva Farmácias',
    description:
      'Aplicação front-end para gerenciamento de farmácias, com interface moderna e responsiva. Implementa funcionalidades de cadastro, busca e gerenciamento de medicamentos.',
    tags: ['React', 'TypeScript', 'Styled Components', 'Context API'],
    githubLink: 'https://github.com/LucasBlunTT/app-guarda-chuva-farmacias',
    imageUrl: guardaChuvaApp,
    featured: true,
  },
  {
    id: 6,
    title: 'Clone Spotify',
    description:
      'Recriação da interface do Spotify com React, implementando player de música funcional, navegação entre playlists e design responsivo fiel ao original.',
    tags: ['React', 'CSS Modules', 'JavaScript', 'API Integration'],
    githubLink: 'https://github.com/LucasBlunTT/app-clone-spotify',
    imageUrl: spotifyClone,
    featured: true,
  },
  {
    id: 7,
    title: 'Task List App',
    description:
      'Aplicativo de gerenciamento de tarefas com funcionalidades de criação, edição, exclusão e marcação de tarefas como concluídas. Interface intuitiva e moderna.',
    tags: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    githubLink: 'https://github.com/LucasBlunTT/task-list-app',
    imageUrl: taskListApp,
    featured: true,
  },
  {
    id: 8,
    title: 'Projeto Pokémon API',
    description:
      'Aplicação que consome a API de Pokémon, exibindo informações detalhadas sobre diferentes Pokémon, com sistema de busca e filtragem por tipos.',
    tags: ['JavaScript', 'HTML', 'CSS', 'API REST', 'Responsivo'],
    githubLink: 'https://github.com/LucasBlunTT/projeto-poke-API',
    imageUrl: pokemonApi,
    featured: true,
  },
  {
    id: 9,
    title: 'Projeto Blizzard',
    description:
      'Clone do site da Blizzard Entertainment, com foco em reproduzir a experiência visual e interativa do site original. Implementa carrossel de jogos e modal de login.',
    tags: ['HTML', 'SASS', 'JavaScript', 'Animações', 'Responsivo'],
    githubLink: 'https://github.com/LucasBlunTT/projeto-blizzard',
    imageUrl: blizzardProject,
    featured: true,
  },
  {
    id: 10,
    title: 'Projeto God of War',
    description:
      'Landing page para o jogo God of War Ragnarök, com design imersivo, animações e efeitos visuais que capturam a essência do jogo.',
    tags: ['HTML', 'SASS', 'JavaScript', 'Animações', 'Responsivo'],
    githubLink: 'https://github.com/LucasBlunTT/projeto-god-of-war',
    imageUrl: godOfWar,
    featured: true,
  },
  {
    id: 11,
    title: 'Landing Page Sem Fôlego FC',
    description:
      'Landing page para clube de futebol, com design moderno e responsivo. Apresenta informações sobre o clube, jogadores e próximos eventos.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
    githubLink: 'https://github.com/LucasBlunTT/lp-semfolegofc',
    imageUrl: semFolegoFc,
    featured: true,
  },
  {
    id: 12,
    title: 'Manager PACS Front',
    description:
      'Interface front-end para o sistema de gerenciamento PACS, com dashboard administrativo, visualização de imagens médicas e gerenciamento de usuários.',
    tags: ['React', 'TypeScript', 'Styled Components', 'Context API'],
    githubLink: 'https://github.com/LucasBlunTT/manager-pacs-front',
    imageUrl: managerPacsFront,
    featured: true,
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
            {filter === 'front' ? (
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubLink={project.githubLink}
                imageUrl={project.imageUrl ?? ''}
              />
            ) : (
              <div className="bg-[#0a0a20] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.icons?.map((icon, idx) => (
                    <span key={idx} className="text-2xl text-purple-500">
                      {icon}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Ver no GitHub
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
