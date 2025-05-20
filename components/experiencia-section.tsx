import React from 'react';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto px-4 py-16 relative z-10"
    >
      <h2 className="text-4xl font-bold text-center mb-16">Experiência</h2>
      <div className="max-w-3xl mx-auto">
        <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Desenvolvedor Fullstack</h3>
          <p className="text-purple-400">Empresa Pixeon • 2022 - Presente</p>
          <p className="mt-2 text-gray-300">
            Experiência em projetos com React, React Native e Next.js, com foco
            na criação de interfaces modernas, performáticas e seguras.
            Participação no desenvolvimento de uma SPA para um dashboard de
            produtividade hospitalar voltado à análise de imagens médicas, com
            foco em usabilidade, desempenho e acessibilidade. Experiência com
            gerenciamento de estado com Context API. Utilização de TypeScript,
            Styled Components, Material UI, Jest e React Testing Library,
            seguindo boas práticas de testes automatizados, arquitetura de
            software e aplicação de design system. Implementação de APIs com
            Node.js, Express e TypeORM, integradas a bancos de dados relacionais
            como PostgreSQL, SQL Server e Oracle. Versionamento de código com
            Git e consumo de APIs RESTful.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Analista de Suporte</h3>
          <p className="text-purple-400">Empresa Pixeon • 2020 - 2022</p>
          <p className="mt-2 text-gray-300">
            Na Pixeon, atuei na análise e resolução de problemas técnicos
            relacionados ao PACS (Sistema de Armazenamento e Comunicação de
            Imagens), oferecendo suporte N1 e N2 a clientes de todo o país.
            Entre as principais atividades, destaque para o atendimento técnico
            remoto e presencial, identificação e repasse de bugs para os times
            de P&D e Produto, além da execução de consultas e análises complexas
            em bancos de dados (Oracle, SQL Server e PostgreSQL). Resolvi
            incidentes relacionados a NAT, latência de rede e instabilidades em
            infraestrutura, sempre com foco em entregar soluções que agregassem
            valor ao negócio e aumentassem a satisfação dos clientes.
            Internamente, desenvolvi um dashboard para controle de volume de
            exames utilizando Next.js, React, TypeScript, TypeORM e PostgreSQL.
            No qual agregou muito valor aos clientes que precisam de um controle
            e se preocupam com a saúde do servidor on premises.
          </p>
        </div>
      </div>
    </section>
  );
}
