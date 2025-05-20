import React from 'react';
import Image from 'next/image';

export default function PersonalSectionInfo() {
  return (
    <section className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Olá, sou o
            <div className="text-5xl md:text-6xl lg:text-7xl mt-2">Lucas</div>
          </h1>
          <h2 className="text-xl">
            Eu sou um{' '}
            <span className="text-purple-500 font-semibold">
              Desenvolvedor Full Stack
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Sou um profissional motivado e versátil, sempre pronto para novos
            desafios. Com paixão por aprendizado, dedico-me a entregar
            resultados de alta qualidade. Com uma atitude positiva e mentalidade
            de crescimento, estou pronto para fazer uma contribuição
            significativa e alcançar grandes feitos.
          </p>
          <a
            href="/Currículo%20-%20Lucas%20da%20Silva.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center"
          >
            Ver Currículo
          </a>
        </div>

        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 relative z-10">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQHOcJUHXswpuA/profile-displayphoto-shrink_400_400/B4DZah4qouGwAg-/0/1746472709844?e=1752710400&v=beta&t=kU9j7ztj2nho4LtRuHlCq99agqwBUCmE7omhDQpXCVQ"
              alt="Foto de perfil"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
