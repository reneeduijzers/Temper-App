/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
    theme: {
        extend: {
            colors: {
                "temper-green": "#00FF86",
                "temper-purple": "#691EDD",
            },
            borderColor: {
                "temper-green": "#00FF86",
            },
            zIndex: {
                negative1: "-1",
                negative2: "-2",
            },
        },
        plugins: [],
    },
};
