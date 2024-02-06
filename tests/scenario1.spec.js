import {expect, test} from '@playwright/test';

test ('Scenario1', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();

    await page.getByRole('link', { name: 'Form Authentication' }).click();

    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();

    await page.getByLabel('Username').fill('tomsmith');

    await page.getByLabel('Password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
