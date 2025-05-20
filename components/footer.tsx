import React from 'react'

export default function Footer() {
  return (
      <footer className="bg-[#0a0a20] py-6 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Lucas da Silva. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    )
}
