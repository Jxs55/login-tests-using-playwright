// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from "../pages/loginPage";

test('Invalid Username Login', async ({ page }) => {

const login = new LoginPage(page);

  await login.goto();
    // Login with invalid username
  await login.login("Fake tomsmith", "SuperSecretPassword!");
    // Verifying user remains on login page (not redirected)
  await expect(page).toHaveURL(/login/);
  // Invalid username Message
  await expect(login.flash).toContainText("Your username is invalid!")
});