/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'body': ['Space Grotesk', 'sans-serif'],
      		'display': ['Space Mono', 'monospace'],
			'paragraph': ['Noto Sans', 'sans-serif']
		},
		extend: {
			colors: {
				'kitch-green': '#00ff00',
				'kitch-blue': '#0000ff',
				'kitch-red': '#ff0000',
				'soczew-green': '#5cc8a0',
			},
			transitionProperty: {
				'height': 'height',
			}
		},
		
	},
	plugins: [],
}
