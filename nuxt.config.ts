export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@pinia/nuxt'],
    css: ['normalize.css/normalize.css'],
    srcDir: 'src',
    tailwindcss: {
        cssPath: '@/styles/main.css',
        configPath: 'tailwind.config.cjs',
    },
    app: {
        head: {
            title: 'Paqu.js | The Progressive Discord API Wrapper',
            link: [
                {
                    rel: 'icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
                },
            ],
            meta: [
                {
                    name: 'description',
                    content:
                        'A powerful, easy-to-use library that allows you to interact with the Discord API.',
                },
                {
                    name: 'theme-color',
                    content: '#6566e9',
                },
                {
                    name: 'og:title',
                    content: 'SpaceX',
                },
            ],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
});
