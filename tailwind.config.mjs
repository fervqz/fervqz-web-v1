/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(10 10 10)',
				'primary-darker': 'black',
				'elevated': '#121212',
				'elevated-2': '#222222',
				'elevated-3': '#292929',
				'elevated-4': '#444141',
				'elevated-5': '#727272',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					md: '2rem',
					lg: '10rem',
					xl: '10rem',
					'2xl': '10rem',
				},
			},
		},
	},
	plugins: [],
}
