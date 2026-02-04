const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the Yandex Maps page of the location
  await page.goto('https://yandex.ru/maps/org/mir_rechi/104942983328/reviews/?ll=37.864169%2C55.677296&utm_source=share&z=16');

  // Wait for the reviews section to load
  await page.waitForSelector('.business-reviews-card-view__reviews-container');

  // Scrape the reviews
  const reviews = await page.evaluate(() => {
    const reviewElements = document.querySelectorAll('.business-reviews-card-view__review');
    return Array.from(reviewElements).map(el => {
      const name = el.querySelector('.business-review-view__author-name').innerText;
      const rating = el.querySelector('.business-review-view__rating').getAttribute('aria-label');
      const comment = el.querySelector('.business-review-view__body-text').innerText;
      const date = el.querySelector('.business-review-view__date span').innerText; // Get the date
      return { name, rating, comment, date };
    });
  });

  console.log(reviews);

  // Save the scraped data to a JSON file
  fs.writeFileSync('../public/reviews.json', JSON.stringify(reviews, null, 2));

  // Close the browser
  await browser.close();
})();
