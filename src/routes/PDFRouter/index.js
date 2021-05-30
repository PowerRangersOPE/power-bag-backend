const { Router } = require('express');

const PDFController = require('../../api/controllers/PDFController');

const pdfController = new PDFController();

const router = new Router();

router.get('/pdf/template/:bagid', pdfController.template);
router.get('/pdf/:bagid', pdfController.create);

module.exports = router;
