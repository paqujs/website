/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,tsx,jsx,js,ts}'],
    theme: {
        extend: {
            screens: {
                xs: '420px',
            },
        },
    },
};
