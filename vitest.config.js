import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: '/tde-engenharia-software/',
  test: {
    environment: 'jsdom', 
  },
})