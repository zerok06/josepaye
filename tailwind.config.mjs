/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: {
					100: 'var(--100)',
					200: 'var(--200)',
					300: 'var(--300)',
					400: 'var(--400)',
					500: 'var(--500)',
					600: 'var(--600)',
					700: 'var(--700)',
					800: 'var(--800)',
					900: 'var(--900)',
				},
			},
			backgroundImage: {
				'gradient-radial-primary': 'radial-gradient(140% 107.13% at 50% 10%,transparent 37.41%,var(--500) 69.27%,#fff 100%)',
				'gradient-radial-invert-primary': 'radial-gradient(120% 120% at 50% 100%,transparent 40%,var(--500) 70%,#fff 100%)',
			},
		},
		plugins: [],
	}
}
