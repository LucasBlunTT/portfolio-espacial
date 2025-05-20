import React from 'react';

export default function EducationSection() {
  return (
   <section
  id="education"
  className="container mx-auto px-4 py-16 relative z-10"
>
  <h2 className="text-4xl font-bold text-center mb-16">Educação</h2>
  <div className="max-w-3xl mx-auto">

    <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
      <h3 className="text-xl font-bold">
        Curso DEVinHouse - Desenvolvedor Full-Stack Jr.
      </h3>
      <p className="text-purple-400">
        SENAI/SC - Serviço Nacional de Aprendizagem Industrial • jul de 2024 - mar de 2025
      </p>
      <p className="mt-2 text-gray-300">
        Front-end (300h): Algoritmos, interação com APIs, testes, codificação, metodologias ágeis e lógica de programação.
        <br />
        Back-end (300h): Banco de dados, desenvolvimento de APIs, testes, codificação e segurança da informação.
        <br />
        Full-stack (300h): Virtualização, comunicação assíncrona, testes e gestão do tempo.
      </p>
      <p className="mt-2 text-gray-400 text-sm">
        Competências: React Native · Node.js · JavaScript · HTML5 · CSS · Tailwind CSS · PostgreSQL · TypeORM
      </p>
    </div>

    <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
      <h3 className="text-xl font-bold">
        Tecnólogo em Análise e Desenvolvimento de Sistemas
      </h3>
      <p className="text-purple-400">Universidade CESUSC • 2021 - 2023</p>
      <p className="mt-2 text-gray-300">
        Formação em desenvolvimento de software, com foco em tecnologias web. Aprendizado em linguagens como JavaScript, TypeScript, HTML,
        CSS e frameworks como React e Node.js. Experiência prática em projetos acadêmicos e desenvolvimento de aplicações web.
      </p>
    </div>

    <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
      <h3 className="text-xl font-bold">Front-End Developer</h3>
      <p className="text-purple-400">
        Codeboost • nov de 2022 - mai de 2023
      </p>
      <p className="mt-2 text-gray-300">
        Front-end descomplicado e direto ao ponto! Aprenda a desenvolver interfaces modernas e de alta qualidade.
      </p>
      <p className="mt-2 text-gray-400 text-sm">
        Competências: scss · Gulp.js · React.js · Webpack · Web Design Responsivo · CSS · HTML · JavaScript · SASS · Next.js · Tailwind CSS
      </p>
    </div>

    <div className="border-l-2 border-purple-500 pl-6 pb-10 relative">
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
      <h3 className="text-xl font-bold">
        Técnico em Informática, Tecnologia da Informação
      </h3>
      <p className="text-purple-400">
        SENAI/SC - Serviço Nacional de Aprendizagem Industrial • 2012 - dez de 2014
      </p>
      <p className="mt-2 text-gray-300">
        Curso amplo voltado para área de T.I, focado em Programação, QA e Análise de Sistemas.
      </p>
    </div>

  </div>
</section>

  );
}
