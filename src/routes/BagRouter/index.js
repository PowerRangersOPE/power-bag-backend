const { Router } = require('express');

const BagController = require('../../api/controllers/BagController');

const bagController = new BagController();

const router = new Router();

console.log('Refatorar depois de implementar o login');
function validateToken(req, res, next) {
  req.clienteId = '9ac1dc88-a3bd-484f-901c-b853560e1ac8';
  next();
}

router.get('/bag', bagController.index);
router.get('/bag/:id', bagController.show);
router.post('/bag', validateToken, bagController.store);
router.put('/bag/:id', bagController.update);
router.delete('/bag/:id', bagController.destroy);

module.exports = router;
