const getPDFUseCase = require('../useCases/pdf');

const { createPDF, templatePDF } = getPDFUseCase();

class PDFController {
  async template(req, res) {
    try {
      const { bagid: bagID } = req.params;
      const template = await templatePDF.execute({ bagID });
      return res.send(template);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const { bagid: bagID } = req.params;
      const pdf = await createPDF.execute({ bagID });
      res.contentType('application/pdf');
      return res.send(pdf);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = PDFController;
