const { expect } = require('@playwright/test');

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await expect(this.yourFeedTab).toBeVisible();
  }
}