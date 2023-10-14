/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				custom: {
					one: "#18181B",
					two: "#ecfeff",
					three: "#22d3ee",
					four: "#0ea5e9",
					five: "#3b82f6",
					six: "#1d4ed8",
				}
			}
		},
	},
	plugins: [],
}
