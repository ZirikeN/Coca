import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    root: './src',
    server: {
        port: 3000
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input:{
                main:' ./src/index.html',
            }
        }
    },
    plugins: [
        injectHTML(),
        ViteMinifyPlugin(),
        ViteImageOptimizer({
        png: {
            quality: 80,
        },
        jpg: {
            quality: 80,
        },
    })]
})