const { Router } = require('express');

const BagController = require('../../api/controllers/BagController');

const bagController = new BagController();

const router = new Router();

console.log('(BagRouter) Refatorar depois de implementar o login');
function validateToken(req, res, next) {
  req.clienteId = 'bf9f7a80-b2cc-4159-937e-f1fa3eda17ef';
  next();
}

router.get('/bag', bagController.index);
router.get('/bag/:id', bagController.show);
router.post('/bag', validateToken, bagController.store);
router.put('/bag/:id', bagController.update);
router.delete('/bag/:id', bagController.destroy);

module.exports = router;
