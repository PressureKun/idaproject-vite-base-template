import nunjucks from '@vituum/vite-plugin-nunjucks';
import eslint from 'vite-plugin-eslint';
import vituum from 'vituum';

export default {
    plugins: [
        vituum({
            imports: {
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
