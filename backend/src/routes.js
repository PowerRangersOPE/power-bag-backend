const { Router } = require("express");

const TestController = require("./api/controllers/TestController");
const CartaoController = require("./api/controllers/CartaoController");
const EnderecoController = require("./api/controllers/EnderecoController");
const PerfilController = require("./api/controllers/PerfilController");
const ClienteController = require("./api/controllers/ClienteController");
const BagController = require("./api/controllers/BagController");
const ProdutoController = require("./api/controllers/ProdutoController");

const testController = new TestController();
const cartaoController = new CartaoController();
const enderecoController = new EnderecoController();
const perfilController = new PerfilController();
const clienteController = new ClienteController();
const bagController = new BagController();
const produtoController = new ProdutoController();

const router = Router();

router.post("/test", testController.create);
router.get("/test", testController.show);

router.get("/cartao", cartaoController.index);
router.get("/cartao/:id", cartaoController.show);
router.post("/cartao", cartaoController.store);
router.put("/cartao/:id", cartaoController.update);
router.delete("/cartao/:id", cartaoController.destroy);

router.get("/endereco", enderecoController.index);
router.get("/endereco/:id", enderecoController.show);
router.post("/endereco", enderecoController.store);
router.put("/endereco/:id", enderecoController.update);
router.delete("/endereco/:id", enderecoController.destroy);

router.get("/perfil", perfilController.index);
router.get("/perfil/:id", perfilController.show);
router.post("/perfil", perfilController.store);
router.put("/perfil/:id", perfilController.update);
router.delete("/perfil/:id", perfilController.destroy);

router.get("/cliente", clienteController.index);
router.get("/cliente/:id", clienteController.show);
router.post("/cliente", clienteController.store);
router.put("/cliente/:id", clienteController.update);
router.delete("/cliente/:id", clienteController.destroy);

router.get("/bag", bagController.index);
router.get("/bag/:id", bagController.show);
router.post("/bag", bagController.store);
router.put("/bag/:id", bagController.update);
router.delete("/bag/:id", bagController.destroy);

router.get("/produto", produtoController.index);
router.get("/produto/:id", produtoController.show);
router.post("/produto", produtoController.store);
router.put("/produto/:id", produtoController.update);
router.delete("/produto/:id", produtoController.destroy);

module.exports = router;
