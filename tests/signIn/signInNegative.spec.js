import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';

test.describe('Sign in negative tests', () => {
  let signInPage;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.open();
  });

  test('Assert error message for empty password', async ({ page }) => {
    await signInPage.fillEmailField('test@gmail.com');
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(`password:can't be blank`);
  });

  test('Assert error message for empty email', async ({ page }) => {
    await signInPage.fillPasswordField('newpass123!');
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(`email:can't be blank`);
  });

  test('Assert error message for wrong password', async ({ page }) => {
    await signInPage.fillEmailField('test@gmail.com');
    await signInPage.fillPasswordField('1');
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(
      `email or password:is invalid`,
    );
  });
});
