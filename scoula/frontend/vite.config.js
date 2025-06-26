import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// Vue.js를 위한 Vite 플러그인을 가져옴
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // 개발 서버 설정
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 백엔드 서버 연결
      },
    },
  },

  // 빌드 설정
  build: {
    outDir:
      'C:/Users/82103/KB부트캠프/scoula/backend/src/main/webapp/resources',
  },
});
