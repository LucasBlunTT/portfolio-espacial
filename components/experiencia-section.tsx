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
          <h3 className="text-xl font-bold">Desenvolvedor Full Stack</h3>
          <p className="text-purple-400">
            Dynamox • Florianópolis, SC • janeiro de 2026 - Presente (9 meses)
          </p>
          <p className="mt-2 text-gray-300">
            Atuação no desenvolvimento de aplicações Full Stack com React.js,
            Node.js e Express.js, incluindo criação e manutenção de APIs REST
            documentadas com OpenAPI. Modelagem e otimização de bancos MongoDB
            e implementação de arquiteturas baseadas em microsserviços, com
            deploy e operação em GCP utilizando Docker e Kubernetes. Automação
            de processos através de pipelines CI/CD e participação em
            processos ágeis (Scrum), code reviews e melhoria contínua da
            plataforma. Desenvolvimento de soluções utilizando recursos de
            Inteligência Artificial Generativa e integração entre serviços
            com Apache Kafka.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Front-end Developer</h3>
          <p className="text-purple-400">
            Mádrin - Soluções Pediátricas • Florianópolis, SC • junho de 2025 -
            janeiro de 2026 (8 meses)
          </p>
          <p className="mt-2 text-gray-300">
            Atuação na modernização de uma aplicação web voltada à pediatria,
            com foco em performance, escalabilidade e qualidade de código.
            Migração da base de React + JavaScript para Next.js + TypeScript,
            com refatoração completa e padronização da tipagem. Implementação
            de SSR e SSG, reduzindo o tempo de carregamento e melhorando o
            SEO. Reestruturação da arquitetura front-end, aumentando a
            manutenibilidade e a reutilização de componentes, além da correção
            de gargalos de performance e bugs críticos em produção.
            Tecnologias: React, Next.js, TypeScript, Tailwind CSS, DaisyUI e
            Context API.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Analista de Suporte Sênior</h3>
          <p className="text-purple-400">
            Pixeon • Florianópolis, SC • junho de 2019 - janeiro de 2025 (5
            anos e 8 meses)
          </p>
          <p className="mt-2 text-gray-300">
            Atuação no setor de HealthTech com foco em soluções para
            ambientes hospitalares de missão crítica, garantindo alta
            disponibilidade, desempenho e evolução tecnológica dos sistemas
            PACS e aplicações web corporativas. Suporte N1/N2 a clientes em
            todo o Brasil, com diagnóstico de falhas de infraestrutura, rede e
            aplicações, além de consultas avançadas em Oracle, SQL Server e
            PostgreSQL. Desenvolvimento de SPAs e dashboards analíticos com
            React, Next.js e TypeScript, e criação de APIs RESTful com
            Node.js, Express e TypeORM. Testes automatizados (Jest, React
            Testing Library) seguindo Clean Code e princípios SOLID. Projeto
            destaque: dashboard de monitoramento de volume de exames e saúde
            do servidor on-premises.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Analista de Suporte</h3>
          <p className="text-purple-400">
            Softplan Planejamento e Sistemas • Florianópolis, SC • outubro de
            2018 - junho de 2019 (9 meses)
          </p>
          <p className="mt-2 text-gray-300">
            Suporte a clientes na utilização do SAJ (Sistema de Automação da
            Justiça), com registro e classificação de chamados, análise
            inicial (N1) e encaminhamento para N2 quando necessário.
            Acompanhamento do ciclo de vida dos chamados, coleta e análise de
            logs para diagnóstico de problemas, repasse de bugs e melhorias ao
            time de desenvolvimento, execução de testes em novas versões (RAV)
            e intervenções pontuais em bancos SQL Server e Oracle.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">
            Estagiário → Assistente de Suporte Técnico → Analista de Suporte
          </h3>
          <p className="text-purple-400">
            Pixeon • agosto de 2014 - outubro de 2018 (4 anos e 3 meses)
          </p>
          <p className="mt-2 text-gray-300">
            Trajetória iniciada como Estagiário, com evolução para Assistente
            de Suporte Técnico e, na sequência, Analista de Suporte.
            Construção da base técnica em atendimento a clientes do setor de
            HealthTech, suporte N1/N2, bancos de dados e ambientes Linux que
            sustentou a atuação posterior como Analista de Suporte Sênior.
          </p>
        </div>
      </div>
    </section>
  );
}
