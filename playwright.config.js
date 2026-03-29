import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // шлях до тестових файлів
  use: {
    baseURL: 'http://localhost:3000', // ваш базовий URL
    headless: true, // Запуск без інтерфейсу браузера
  },
});