// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("Successful Login", async ({ page }) => {
  
  const login = new LoginPage(page);

  await login.goto();
  // Login with valid username and password
  await login.login("tomsmith", "SuperSecretPassword!");
  
  await expect(page).toHaveURL(/secure/);
  // Success Message
  await expect(login.flash).toContainText("You logged into a secure area!");
});
