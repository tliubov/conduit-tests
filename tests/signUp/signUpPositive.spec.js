import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';

test('Successful `Sign up` flow test', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const homePage = new HomePage(page);
  const username = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  await signUpPage.open()
  await signUpPage.fillUsernameField(username);
  await signUpPage.fillEmailField(email);
  await signUpPage.fillPasswordField(password);
  await signUpPage.clickSignUpButton();
  await homePage.assertYourFeedTabIsVisible();
});
