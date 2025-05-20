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
          <h3 className="text-xl font-bold">Desenvolvedor Frontend</h3>
          <p className="text-purple-400">Empresa XYZ • 2022 - Presente</p>
          <p className="mt-2 text-gray-300">
            Desenvolvimento de interfaces responsivas e interativas utilizando
            React, Next.js e Tailwind CSS. Implementação de soluções escaláveis
            e otimizadas para performance.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Desenvolvedor Web</h3>
          <p className="text-purple-400">Startup ABC • 2020 - 2022</p>
          <p className="mt-2 text-gray-300">
            Criação de websites e aplicações web utilizando HTML, CSS e
            JavaScript. Colaboração em equipe para desenvolvimento de projetos
            inovadores.
          </p>
        </div>
      </div>
    </section>
  );
}
