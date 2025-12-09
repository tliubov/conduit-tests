import { test, expect } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';

test.describe('Sign in negative tests', () => {
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    await signUpPage.open();
  });

  test('Assert error message for empty username in Sign up form', async ({
    page,
  }) => {
    const errorMessage = `username:Username must start with a letter, 
    have no spaces, and be 2 - 40 characters.`;

    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();
    await signUpPage.assertErrorMessageContainsText(errorMessage);
  });

  test('Assert error message for empty email in Sign up form', async ({
    page,
  }) => {
    const errorMessage = `email:This email does not seem valid.`;

    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();
    await signUpPage.assertErrorMessageContainsText(errorMessage);
  });

  test('Assert error message for empty password in Sign up form', async ({
    page,
  }) => {
    const errorMessage = `password:can't be blank`;

    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.clickSignUpButton();
    await signUpPage.assertErrorMessageContainsText(errorMessage);
  });
});

