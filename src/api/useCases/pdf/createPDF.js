const puppeteer = require('puppeteer');

class createPDF {
  async execute({ bagID }) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(`${process.env.GENERATE_PDF_TEMPLATE_URL}${bagID}`, {
        waitUntil: 'networkidle0',
      });

      const pdf = await page.pdf({
        printBackground: true,
        format: 'Letter',
        margin: {
          top: '20px',
          bottom: '40px',
          left: '20px',
          right: '20px',
        },
      });

      await browser.close();

      return pdf;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createPDF;
