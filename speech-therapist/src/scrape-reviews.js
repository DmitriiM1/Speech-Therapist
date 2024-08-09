const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the Yandex Maps page of the location
  await page.goto('https://yandex.ru/maps/org/mir_rechi/104942983328/reviews/?ll=37.864169%2C55.677296&utm_source=share&z=16');

  // Wait for the reviews section to load (you may need to adjust the selector)
  await page.waitForSelector('.your-review-section-selector');

  // Scrape the reviews
  const reviews = await page.evaluate(() => {
    const reviewElements = document.querySelectorAll('.your-review-element-selector');
    return Array.from(reviewElements).map(el => {
      const name = el.querySelector('.your-name-selector').innerText;
      const rating = el.querySelector('.your-rating-selector').innerText;
      const comment = el.querySelector('.your-comment-selector').innerText;
      return { name, rating, comment };
    });
  });

  console.log(reviews);

  // Save the scraped data to a JSON file or database
  const fs = require('fs');
  fs.writeFileSync('reviews.json', JSON.stringify(reviews, null, 2));

  // Close the browser
  await browser.close();
})();
