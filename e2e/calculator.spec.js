import { test, expect } from '@playwright/test';

test('calculator adds numbers', async ({ page }) => {
  await page.goto('http://localhost:5173'); // У вашому випадку має бути порт 5173

  // Додаємо статусну інформацію
  await page.evaluate(() => {
    const statusElement = document.createElement('div');
    statusElement.textContent = 'Your status';  // Або використовуйте динамічні значення
    statusElement.style.position = 'fixed';
    document.body.appendChild(statusElement);
  });

  // Ваші кроки тесту для калькулятора
  await page.click('[data-digit="2"]');
  await page.click('[data-digit="3"]');
  await expect(page.locator('#display')).toHaveValue('23');
});