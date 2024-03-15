/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"custom-white": "#e6f0f7",
				"primary-white": "#dcf1ff",
				"secundary-white": "#ca9dfd",
				"accent-white": "#ad6cf6",
				"custom-black": "#181a1c",
				"primary-black": "#2e3239",
				"secundary-black": "#4aaeffbf",
				"accent-black": "#0078d9bf",
			},
		},
	},
	plugins: [],
}
