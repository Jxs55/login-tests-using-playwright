// @ts-check
import { test, expect } from '@playwright/test';

test('Invalid Username Login', async ({ page }) => {
    // Set the url to the login page
  await page.goto('https://the-internet.herokuapp.com/login');
    // Look for the input of Username and Password
    // Filling the username input with a invalid username
  await page.getByLabel("Username").fill("Fake tomsmith")
    // Fill the password input with valid password
  await page.getByLabel("Password").fill("SuperSecretPassword!")
    // Click the button to login
  await page.getByRole('button').click();
  // Invalid username Message
  await expect(page.locator("#flash")).toContainText(" Your username is invalid!")
});