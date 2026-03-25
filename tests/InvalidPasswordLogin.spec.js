// @ts-check
import { test, expect } from '@playwright/test';

test('Invalid Password Login', async ({ page }) => {
    // Set the url to the login page
  await page.goto('https://the-internet.herokuapp.com/login');
    // Look for the input of Username and Password
    // Filling the username input with valid username
  await page.getByLabel("Username").fill("tomsmith")
    // Fill the password input with invalid password
  await page.getByLabel("Password").fill("fake SuperSecretPassword!")
    // Click the button to login
  await page.getByRole('button').click();
    // Verifying user remains on login page (not redirected)
  await expect(page).toHaveURL(/login/);
  // Invalid Password Message
  await expect(page.locator("#flash")).toContainText("Your password is invalid!")
});