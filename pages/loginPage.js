class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByLabel("Username");
    this.password = page.getByLabel("Password");
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.flash = page.locator("#flash");
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

export default LoginPage;