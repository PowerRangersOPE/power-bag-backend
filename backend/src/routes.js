const { Router } = require('express')

const TestController = require('./api/controllers/TestController')

const testController = new TestController()

const router = Router()

router.post('/test', testController.create)
router.get('/test', testController.show)


module.exports = router