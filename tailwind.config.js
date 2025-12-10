/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Accent colors - will be overridden by CSS variables
                accent: {
                    DEFAULT: '#7c3aed', // Violet for light mode
                    light: '#8b5cf6',
                    dark: '#6d28d9',
                },
                cyan: {
                    400: '#00f2ff', // Bright cyan for dark mode
                    500: '#00d9e6',
                    600: '#00bfcc',
                },
                purple: {
                    500: '#8b5cf6',
                    600: '#7c3aed',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            }
        },
    },
    plugins: [],
}
