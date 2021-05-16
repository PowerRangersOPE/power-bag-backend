const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const { resolve } = require('path');
const { readFileSync } = require('fs');

class sendClienteEmail {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.POWER_BAG_EMAIL,
        pass: process.env.POWER_BAG_EMAIL_PASSWORD,
      },
    });
  }

  execute({ cliente }) {
    try {
      const { nome, email } = cliente;

      const viewPath = resolve(
        __dirname,
        '..',
        '..',
        '..',
        'api',
        'views',
        'templateClienteEmail.hbs'
      );

      const templateFileContent = readFileSync(viewPath).toString('utf8');

      const mailTemplateParse = handlebars.compile(templateFileContent);

      const html = mailTemplateParse({ nome });

      const mailOptions = {
        from: process.env.POWER_BAG_EMAIL,
        to: email,
        subject: 'Nova solicitação de BAG',
        html,
      };

      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
        return console.log(`Email sent: ${info.response}`);
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = sendClienteEmail;
