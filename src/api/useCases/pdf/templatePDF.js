const { resolve } = require('path');

class templatePDF {
  constructor({ ejs, modelCliente, modelBag, findProduto }) {
    this.ejs = ejs;
    this.cliente = modelCliente;
    this.bag = modelBag;
    this.findProdutos = findProduto;
  }

  async createTemplate({ produtos }) {
    try {
      const filePath = resolve(
        __dirname,
        '..',
        '..',
        '..',
        'api',
        'views',
        'pdf',
        'template.ejs'
      );

      const html = await this.ejs.renderFile(
        filePath,
        { produtos },
        { async: true }
      );

      return html;
    } catch (error) {
      throw error;
    }
  }

  async getProdutos({ perfil }) {
    try {
      const {
        genero,
        fx_etaria,
        estacao_ano,
        tamanho_sapato,
        tamanho_calca,
        tamanho_camisa,
        cor,
        tipo_estampa,
        tipo_tenis,
        tipo_estilo,
      } = perfil;

      const requiredConditionals = [{ genero }, { fx_etaria }];

      const optionalConditionals = [
        { estacao_ano },
        { cor },
        { tipo_tenis },
        { tipo_estampa },
        { tipo_estilo },
        { tamanho_sapato },
        { tamanho_calca },
        { tamanho_camisa },
      ];

      const { produtos } = await this.findProdutos.execute(
        requiredConditionals,
        optionalConditionals
      );

      return { produtos };
    } catch (error) {
      throw error;
    }
  }

  async getClienteData({ bagID }) {
    try {
      const { cliente_id } = await this.bag.findByPk(bagID);
      const { perfil } = await this.cliente.findByPk(cliente_id, {
        include: [{ association: 'perfil' }],
      });

      return { perfil };
    } catch (error) {
      throw error;
    }
  }

  async execute({ bagID }) {
    try {
      const { perfil } = await this.getClienteData({ bagID });
      const { produtos } = await this.getProdutos({ perfil });
      const html = await this.createTemplate({ produtos });

      return html;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = templatePDF;
