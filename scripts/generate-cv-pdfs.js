const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const targets = [
    { html: 'public/cv_es.html', out: 'public/cv_es.pdf' },
    { html: 'public/cv_en.html', out: 'public/cv_en.pdf' },
    { html: 'public/cv.html', out: 'public/cv.pdf' }
  ];

  for (const t of targets) {
    const fileUrl = 'file://' + path.resolve(t.html);
    console.log('Rendering', fileUrl);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.pdf({ path: t.out, format: 'A4', printBackground: true });
    console.log('Saved', t.out);
  }

  await browser.close();
  console.log('All PDFs generated');
})();
