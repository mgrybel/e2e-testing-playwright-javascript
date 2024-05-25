import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test.beforeEach(async ({ page }) => {
  const pageManager = new PageManager(page);
  pageManager.getNavigationPage().navigateToLoginPage();
});

test.describe('Positive scenarios', () => {
  test('@smoke @regression Log in to the app with valid customer credentials', async ({
    page,
  }) => {
    const pageManager = new PageManager(page);
    pageManager.getLoginPage().performLogin('customer@test.com', 'test123');
    await expect(pageManager.getLoginPage().productsButton).toBeVisible();
  });
});

test.describe('Negative scenarios', () => {
  test('@regression A customer cannot log in with invalid credentials', async ({
    page,
  }) => {
    const pageManager = new PageManager(page);
    pageManager.getLoginPage().performLogin('test@test.com', 'test123');
    await expect(pageManager.getLoginPage().invalidLoginMessage).toBeVisible();
  });

  test('@regression A customer must fill all fields', async ({ page }) => {
    const pageManager = new PageManager(page);
    pageManager.getLoginPage().performLogin('', 'test123');
    await expect(
      pageManager.getLoginPage().inputsRequiredMessage
    ).toBeVisible();
  });
});
