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
					
					blue: {
						'50': '#f2f8fd',
						'100': '#e3f0fb',
						'200': '#c1e2f6',
						'300': '#8ac9ef',
						'400': '#4caee4',
						'500': '#2594d2',
						'600': '#1778b5',
						'700': '#145e90',
						'800': '#145078',
						'900': '#164364',
						'950': '#0f2c42',
					},			
				},
			},
		},
	},
	plugins: [],
}
