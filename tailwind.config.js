const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.liquid',
        './src/**/*.11ty.js',
        './src/**/*.svelte',
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
