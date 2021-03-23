const { Router } = require('express')

const BagController = require('../../api/controllers/BagController')
const bagController = new BagController()

const router = new Router()

router.get("/bag", bagController.index);
router.get("/bag/:id", bagController.show);
router.post("/bag", bagController.store);
router.put("/bag/:id", bagController.update);
router.delete("/bag/:id", bagController.destroy);

module.exports = router