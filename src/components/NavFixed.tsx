import React, { useState } from 'react'
import Logo from './Logo.astro'

const MENU = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Tutoriales',
    href: '/tutorials',
  },
  {
    name: 'CV',
    href: '/cv',
  },
]
const IMAGE = '/assets/logos/logo_positive.svg'
const ALT = 'logo jose paye'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 left-0 right-0 z-50 h-0 flex justify-center sm:w-auto w-full font-inter">
      {/* Menú desplegable */}
      <div
        className={`fixed top-0 left-0 right-0 h-full w-full bg-white dark:bg-black/90 pt-[80px] text-light dark:text-white flex flex-col px-8 pointer-events-none opacity-0 transition duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : ''
        }`}
      >
        {MENU.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="py-4 border-b font-inter border-primary-200 dark:border-white/20 hover:opacity-70 transition duration-300 flex items-center justify-between group"
            rel="noopener noreferrer"
          >
            {item.name}
            <span className="rotate-180 group-hover:translate-x-0 -translate-x-2 opacity-0 group-hover:opacity-100 transition duration-300">
              {/* Ícono de flecha (puedes reemplazarlo con un SVG o componente) */}
              →
            </span>
          </a>
        ))}
      </div>

      {/* Barra de navegación */}
      <div className="sm:w-auto w-full">
        <nav className="relative px-2 h-10 flex items-center border-primary-100 dark:border-white/20 border bg-white/80 dark:bg-black/30 text-sm backdrop-blur text-white mt-5 rounded-full">
          <div className="justify-between items-center flex sm:hidden w-full">
            <a
              href="/"
              className="text-black flex gap-1 items-center dark:text-white cursor-pointer"
            >
              <img src={IMAGE} className="size-6 md:size-8" alt={ALT} />
              <span className="font-inter text-base md:text-lg font-bold">
                JosePaye
              </span>
            </a>
            {/* Reemplaza esto con tu componente de logo */}
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/zerok06/"
                className="px-3 py-[3px] rounded-full bg-button-light dark:bg-none hover:bg-white/80 dark:bg-white text-white dark:text-primary-500 transition duration-300 flex items-center gap-1 group cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a Linkedin
                <svg
                  className="rotate-180 group-hover:translate-x-1 transition duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
                  ></path>
                </svg>
              </a>
              {/* Botón de menú */}
              <button
                className="px-3 py-[3px] border border-primary-100 dark:border-white/20 rounded-full bg-primary-100 dark:text-white text-light dark:bg-white/10"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="currentColor"
                    d="M60 29.8H4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 17H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M4 17.2h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="gap-1 items-end sm:flex hidden">
            {MENU.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-[3px] dark:text-white text-light rounded-full dark:hover:bg-white/10 hover:bg-primary-100 transition duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/zerok06/"
              className="px-3 py-[3px] rounded-full bg-button-light dark:bg-none dark:bg-white hover:bg-white/80 text-white dark:text-primary-500 transition duration-300 flex items-center gap-1 group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Linkedin
              <svg
                className="rotate-180 group-hover:translate-x-1 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
