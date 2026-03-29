import { test, expect } from '@playwright/test';

test('calculator adds numbers', async ({ page }) => {

  await page.goto('http://localhost:3000');

  await page.click('[data-digit="2"]');
  await page.click('[data-op="+"]');
  await page.click('[data-digit="3"]');
  await page.click('[data-action="equals"]');

  await expect(page.locator('#display')).toHaveValue('5');

});