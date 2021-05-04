const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const { resolve } = require('path');
const { readFileSync } = require('fs');

class sendEmail {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADM_EMAIL,
        pass: process.env.ADM_EMAIL_PASSWORD,
      },
    });
  }

  /**
   * Nome, email, celular, endereço {rua, numero, bairro, cidade}
   * Perfil: genero, fx_etaria, necessidade, cor, tipo_estampa, tipo_tenis
   * tamanho_sapato, tamanho_calca, tamanho_camisa
   */

  execute({ cliente, id }) {
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
      'templateEmail.hbs'
    );

    const templateFileContent = readFileSync(viewPath).toString('utf8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    const mailOptions = {
      from: 'power.bag.squad@gmail.com',
      to: email,
      subject: 'Nova solicitação de BAG',
      html,
      attachments: [
        {
          path: resolve(
            __dirname,
            '..',
            '..',
            '..',
            'temp',
            `ProdutosParaBag-${id}.pdf`
          ),
        },
      ],
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) return console.log(error);
      return console.log(`Email sent: ${info.response}`);
    });
  }
}

module.exports = sendEmail;
