import { expect } from '@playwright/test';

export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByPlaceholder('Email');
    this.usernameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.errorMessage = page.getByRole('list').nth(1);
  }

  async open() {
    await this.page.goto('https://conduit.mate.academy/user/register');
  }

  async fillEmailField(email) {
    await this.emailField.fill(email);
  }

  async fillUsernameField(username) {
    await this.usernameField.fill(username);
  }

  async fillPasswordField(password) {
    await this.passwordField.fill(password);
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  async assertErrorMessageContainsText(messageText) {
    await expect(this.errorMessage).toContainText(messageText);
  }
}