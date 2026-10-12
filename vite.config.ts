import {defineConfig} from 'vite';
export default defineConfig({build:{rollupOptions:{output:{manualChunks(id){if(id.includes('node_modules/react'))return 'react';if(id.includes('/catalog/exercises.json')||id.includes('/assets/manifest.json')||id.includes('/catalog/prescription-rules.json'))return 'catalog';}}}}});
