const { Router } = require("express");

const CartaoController = require("../../api/controllers/CartaoController");
const cartaoController = new CartaoController();

const router = Router();

router.get("/cartao", cartaoController.index);
router.get("/cartao/:id", cartaoController.show);
router.post("/cartao", cartaoController.store);
router.put("/cartao/:id", cartaoController.update);
router.delete("/cartao/:id", cartaoController.destroy);

module.exports = router;