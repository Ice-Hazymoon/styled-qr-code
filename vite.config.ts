import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'QRCodeStyling',
            fileName: 'styled-qr-code',
            formats: ['es'],
        },
        outDir: path.resolve(__dirname, 'lib'),
        rollupOptions: {
            output: {
                exports: 'default',
            },
        },
        minify: false, // 禁用压缩
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.ts', '.js'],
    },
    plugins: [
        // 插入 ESLint 插件 (可选)
    ],
});
