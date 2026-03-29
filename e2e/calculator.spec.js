import { test, expect } from '@playwright/test';

test('calculator adds numbers', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Використання document в браузерному контексті через evaluate
  await page.evaluate((viteStatus) => {
    const statusElement = document.createElement('div');
    statusElement.textContent = viteStatus;  // Використовуємо передану змінну
    statusElement.style.position = 'fixed';
    document.body.appendChild(statusElement);
  }, process.env.VITE_APP_STATUS);  // Передаємо значення змінної

  // Ваші кроки тесту
  await page.click('[data-digit="2"]');
  await page.click('[data-action="+"]');
  await page.click('[data-digit="3"]');
  await page.click('[data-action="equals"]');

  await expect(page.locator('#display')).toHaveValue('5');
});