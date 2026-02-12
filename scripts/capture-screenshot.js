// Run this to take screenshots automatically (requires puppeteer)
// npm install puppeteer && node scripts/capture-screenshot.js

const main = async () => {
  try {
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const sites = [
      { url: "https://lapakskincare.vercel.app", name: "lapakskincare" },
    ];

    for (const site of sites) {
      console.log(`Capturing ${site.url}...`);
      await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
      await page.screenshot({ path: `public/projects/${site.name}.jpg`, type: "jpeg", quality: 90 });
      console.log(`Saved: public/projects/${site.name}.jpg`);
    }

    await browser.close();
    console.log("Done!");
  } catch (e) {
    console.log("Puppeteer not installed. Run: npm install puppeteer");
    console.log("Or manually screenshot the site and save to public/projects/");
  }
};
main();
