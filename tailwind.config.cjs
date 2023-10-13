/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				custom: {
					one: "#18181B",
					two: "#f8fafc",
					three: "#22D3EE",
				}
			}
		},
	},
	plugins: [],
}
