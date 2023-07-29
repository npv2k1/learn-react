import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const title = await page.$eval('h1', (el) => el.textContent);
  expect(title).toBe('Hello');
});
