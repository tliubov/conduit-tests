import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignInPage } from '../../src/pages/SignInPage';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';


test.describe('Successful `Sign in` flow test', () => {

  let user;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    user = {
      username: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    const signUpPage = new SignUpPage(page);
    await signUpPage.open()
    await signUpPage.fillUsernameField(user.username);
    await signUpPage.fillEmailField(user.email);
    await signUpPage.fillPasswordField(user.password);
    await signUpPage.clickSignUpButton();

    await context.close();
  });

  test('log in', async ({ page }) => {
    const signInPage = new SignInPage(page);
    const homePage = new HomePage(page);
    const email = user.email.toLowerCase();
    const password = user.password;

    await signInPage.open();
    await signInPage.fillEmailField(email);
    await signInPage.fillPasswordField(password);
    await signInPage.clickSignInButton();
    await homePage.assertYourFeedTabIsVisible();
  });
});