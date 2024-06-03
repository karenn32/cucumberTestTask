import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open();
});

When(/^User logins with (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^User should see (.*) error message$/, async (message) => {
    await expect(loginPage.loginErrorText).toHaveText(message);
});
