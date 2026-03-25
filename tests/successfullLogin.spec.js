// @ts-check
import { test, expect } from '@playwright/test';

test('Successfull Login', async ({ page }) => {
    // Set the url to the login page
  await page.goto('https://the-internet.herokuapp.com/login');
    // Look for the input of Username and Password, fill them with the correct information, and then click at the button to sign in
  await page.getByLabel("Username").fill("tomsmith")
  await page.getByLabel("Password").fill("SuperSecretPassword!")
  await page.getByRole('button', { name: 'Login' }).click();
    // Expecting the change of url (from /login to /secure)
  await expect(page).toHaveURL(/secure/);
  // Success Message
  await expect(page.locator("#flash")).toContainText("You logged into a secure area!")
});