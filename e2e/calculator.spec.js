import { test, expect } from '@playwright/test';

test('calculator adds numbers', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Збільшуємо таймаут для селекторів
  console.log('Waiting for digit 2');
  await page.waitForSelector('[data-digit="2"]', { timeout: 60000 });
  console.log('Clicking on 2');
  await page.click('[data-digit="2"]', { timeout: 60000 });


  console.log('Waiting for digit 3');
  await page.waitForSelector('[data-digit="3"]', { timeout: 60000 });
  console.log('Clicking on 3');
  await page.click('[data-digit="3"]', { timeout: 60000 });


  // Перевіряємо, чи результат калькуляції правильний
  await expect(page.locator('#display')).toHaveValue('23');
});