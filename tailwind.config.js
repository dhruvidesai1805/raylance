/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                'hpit': {
                    dark: '#020202',      // Main dark background
                    darker: '#050505',    // Slightly different dark
                    purple: {
                        bg: '#0a0514',      // Deep purple background
                        light: '#B088FF',   // Light purple text accent
                        tab: '#1a103c',     // Active tab background
                        border: '#3b2a6e',  // Tab border
                    },
                    red: '#ff3131',       // Primary red accent
                    card: '#111111',      // Card background
                    input: '#0a0a0a',     // Input background
                }
            },
        },
    },
    plugins: [],
}
