import { test, expect } from '@playwright/test'

test('Shows hello world', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Hello world', { exact: true })).toBeVisible()
})
