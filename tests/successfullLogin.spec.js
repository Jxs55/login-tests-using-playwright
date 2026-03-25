// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("Successful Login", async ({ page }) => {
  // Set login variable as the page
  const login = new LoginPage(page);

  await login.goto();

  await login.login("tomsmith", "SuperSecretPassword!");
  // Verify user is redirected to secure area after successful login
  await expect(page).toHaveURL(/secure/);
  // Success Message
  await expect(login.flash).toContainText("You logged into a secure area!");
});
