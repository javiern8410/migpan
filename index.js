const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://visas.migracion.gob.pa/SIVA/verif_citas/");
  //   await page.goto("https://www.despegar.com");
  // const content = await page.locator("img");
  const imgs = await page.$$("img");
  const imgL = imgs.length;
  const activeForm =
    imgL > 2 ? "Visa form is active 🔥" : "Visa form is not active 😢";
  console.log(activeForm);
  const date = new Date().toISOString();
  const today = date.split("T")[0];
  await page.screenshot({ path: `./screenshots/visa-${today}.png` });
  await page.close();
  await browser.close();
})();
