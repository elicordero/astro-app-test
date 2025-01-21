/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F23A2E',
				secondary: '#FF9690',
			  },
			  backgroundImage: {
				'hero-background': 'url("/src/assets/fondo-hero.jpg")',
			  }
		},
	},
	plugins: [],
}
