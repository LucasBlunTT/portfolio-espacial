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
            Bacharelado em Ciência da Computação
          </h3>
          <p className="text-purple-400">Universidade Federal • 2018 - 2022</p>
          <p className="mt-2 text-gray-300">
            Formação completa em Ciência da Computação com foco em
            desenvolvimento de software e algoritmos.
          </p>
        </div>

        <div className="border-l-2 border-purple-500 pl-6 relative">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px]"></div>
          <h3 className="text-xl font-bold">Curso Técnico em Informática</h3>
          <p className="text-purple-400">Instituto Técnico • 2016 - 2018</p>
          <p className="mt-2 text-gray-300">
            Formação técnica com ênfase em programação e desenvolvimento web.
          </p>
        </div>
      </div>
    </section>
  );
}
