export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForNumberOfSeconds(timeInSeconds) {
    await this.page.waitForTimeout(timeInSeconds * 1000);
  }
}
