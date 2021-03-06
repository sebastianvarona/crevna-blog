module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            sans: ['Fira Code'],
        },
        colors: {
            // 'background' : '#181818',
            // 'border' : '#464646',
            'background' : '#101010',
            'background-secondary' : '#050505',
            'border' : '#303030',
            'primary' : '#f8f9fa',
            'secondary' : '#7A7A7A',
            // 'tcolor' : '#E2E2E2',
            'tcolor' : '#d2d2d2',
            'accent' : '#ff7a00'
        },
        aspectRatio: {
            '16/9': '16/9',
            '16/10': '16/10'
        }
        },
    },
    plugins: [],
}
