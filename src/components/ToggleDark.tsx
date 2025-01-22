import { useEffect, useState } from 'react'

const ToggleDark = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    setTheme(localTheme || 'dark')

    if (localTheme === 'dark') document.documentElement.classList.add('dark')
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <button
      className="border border-primary-100 dark:text-white text-light dark:border-white/20 size-7 rounded-full flex items-center justify-center mx-3"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <DarkIcon /> : <LightIcon />}
    </button>
  )
}

const DarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      d="M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"
    />
  </svg>
)
const LightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      d="M15 2h2v5h-2zm6.688 6.9l3.506-3.506l1.414 1.414l-3.506 3.506zM25 15h5v2h-5zm-3.312 8.1l1.414-1.413l3.506 3.506l-1.414 1.414zM15 25h2v5h-2zm-9.606.192L8.9 21.686l1.414 1.414l-3.505 3.506zM2 15h5v2H2zm3.395-8.192l1.414-1.414L10.315 8.9L8.9 10.314zM16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
    />
  </svg>
)

export default ToggleDark
