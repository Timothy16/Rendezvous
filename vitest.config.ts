import { defineVitestConfig } from '@nuxt/test-utils/config'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config';

export default defineVitestConfig({
  plugins: [
    // vue()

  ],
  // any custom Vitest config you require
  test : {
    environment: 'nuxt',
    // globals: true, 
    // setupFiles: './setupTests.js',
  }
})


