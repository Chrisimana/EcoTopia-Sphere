/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#FFFD8F',
                secondary: '#B0CE88',
                primary: '#4C763B',
                background: '#043915',
                white: '#FFFFFF',
                'ghost-white': '#F8FAFC',
                'light-silver': '#D9D9D9',
                black: '#000000',
            },
        },
    },
    plugins: [],
}