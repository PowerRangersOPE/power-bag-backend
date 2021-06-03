const { Router } = require('express');
const verifyToken = require('../../api/middlewares/verifyToken');
const verifyUpdateBag = require('../../api/middlewares/verifyUpdateBag');
const verifyAdmin = require('../../api/middlewares/verifyAdmin');
const { BagSchema } = require('./schema');

const BagController = require('../../api/controllers/BagController');

const bagController = new BagController();

const router = new Router();

router.get('/bag/all', verifyToken, verifyAdmin, bagController.index);
router.get('/bag/detail', verifyToken, bagController.show);
router.post('/bag', verifyToken, bagController.store);
router.put(
  '/bag',
  verifyToken,
  verifyUpdateBag,
  BagSchema,
  bagController.update
);

module.exports = router;
