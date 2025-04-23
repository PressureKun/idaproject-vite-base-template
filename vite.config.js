import nunjucks from '@vituum/vite-plugin-nunjucks';
import eslint from 'vite-plugin-eslint';
import vituum from 'vituum';

export default {
    plugins: [
        vituum({
            input: [
                './src/assets/scss/*/**.{css,pcss,scss,sass,less,styl,stylus}',
                './src/assets/scripts/*/**.{js,ts,mjs}',
            ],
            imports: {
                paths: [
                    './src/assets/scss/*/**', './src/assets/scripts/*/**',
                ],
                filenamePattern: {
                    '+.css': [],
                    '+.scss': 'src/assets/scss',
                    '+.js': 'src/assets/scripts',
                },
            },
        }),
        nunjucks({
            root: './src',
        }),
        eslint(),
    ],
    server: {
        watch: {
            // Tell Vite to watch these file patterns
            include: ['src/**/*.njk', 'src/**/*.scss', 'src/**/*.js'],
        },
    },
};
