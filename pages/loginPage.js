import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginHeading = page.getByRole('heading', { name: 'Login' });
    this.productsButton = page.getByRole('button', { name: 'Products' });
    this.invalidLoginMessage = page.getByText('Invalid email or password');
    this.inputsRequiredMessage = page.getByText(
      'Email and Password are required'
    );
  }

  async performLogin(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
