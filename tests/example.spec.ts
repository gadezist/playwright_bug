import {expect, Page} from '@playwright/test';
import { test } from "./fixtures";

// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
//
//   // create a locator
//   const getStarted = page.locator('text=Get Started');
//
//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');
//
//   // Click the get started link.
//   await getStarted.click();
//
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });


test.describe("Example tests", () => {

  test.beforeEach(async ({ managerPage }) => {
    await managerPage.goto('https://www.microsoft.com/uk-ua');
  });

  test("test 1", async ({ managerPage }) => {
    await expect(managerPage).toHaveTitle('Microsoft – офіційна домашня сторінка')
  });

  test("test 2", async ({ managerPage }) => {
    await expect(managerPage).toHaveTitle('Microsoft – офіційна домашня сторінка')
  });
});
