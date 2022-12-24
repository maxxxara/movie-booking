import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
    server: {
        proxy: {
            './': 'https://booking-api-six.vercel.app/'
        }
    },
    plugins: [react()]
})