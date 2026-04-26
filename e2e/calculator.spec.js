import { test, expect } from "@playwright/test";

test("calculator enters digits", async ({ page }) => {
  await page.goto("/");

  await page.click('[data-digit="2"]');
  await page.click('[data-digit="3"]');

  await expect(page.locator("#display")).toHaveValue("23");
});
