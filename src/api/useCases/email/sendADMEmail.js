const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const { resolve } = require('path');
const { readFileSync } = require('fs');

class sendADMEmail {
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
    const {
      nome,
      email,
      tel_cel1,
      endereco: { rua, numero, bairro, cidade, uf, cep },
      perfil: {
        genero,
        fx_etaria,
        necessidade,
        cor,
        tipo_estampa,
        tipo_tenis,
        tamanho_sapato,
        tamanho_calca,
        tamanho_camisa,
      },
    } = cliente;

    const variables = {
      nome,
      email,
      celular: tel_cel1,
      rua,
      numero,
      bairro,
      cidade,
      uf,
      cep,
      genero,
      fx_etaria,
      necessidade,
      cor,
      tipo_estampa,
      tipo_tenis,
      tamanho_sapato,
      tamanho_calca,
      tamanho_camisa,
    };

    const viewPath = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'api',
      'views',
      'email',
      'templateADMEmail.hbs'
    );

    const templateFileContent = readFileSync(viewPath).toString('utf8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    const mailOptions = {
      from: process.env.POWER_BAG_EMAIL,
      to: process.env.ADM_EMAIL,
      subject: 'Nova solicitação de BAG',
      html,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) return console.log(error);
      return console.log(`Email sent: ${info.response}`);
    });
  }
}

module.exports = sendADMEmail;
