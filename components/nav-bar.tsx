'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050816]/90 backdrop-blur-sm py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-white flex items-center gap-1"
        >
          <span className="text-purple-500">&lt;</span>
          Lucas <span className="text-purple-500">/</span>Silva
          <span className="text-purple-500">&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Habilidades
          </Link>
          <Link
            href="#experience"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Experiência
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#education"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Educação
          </Link>
          <Link
            href="https://github.com/LucasBlunTT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/casluu01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.038 0 3.6 2.001 3.6 4.604v5.588z" />
              </svg>
              LinkedIn
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0a0a20] absolute top-full left-0 w-full py-4 px-4 flex flex-col gap-4 shadow-lg">
          <Link
            href="#"
            className="text-white hover:text-purple-400 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-purple-400 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Habilidades
          </Link>
          <Link
            href="#experience"
            className="text-white hover:text-purple-400 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiência
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-purple-400 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="#education"
            className="text-white hover:text-purple-400 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Educação
          </Link>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white w-full"
          >
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
