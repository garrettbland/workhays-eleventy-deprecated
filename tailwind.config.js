const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.liquid',
            './src/**/*.11ty.js',
            './src/**/*.svelte',
        ],
        // These options are passed through directly to PurgeCSS
        options: {
            safelist: ['disabled'],
        },
    },
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
