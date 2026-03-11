import { test } from '@playwright/test';

test.beforeEach(async ({}, testInfo) => {
  console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {

  console.log(`Finished test: ${testInfo.title}`);

  if (testInfo.status !== testInfo.expectedStatus) {

    await page.screenshot({
      path: `reports/${testInfo.title}.png`,
      fullPage: true
    });

  }

});