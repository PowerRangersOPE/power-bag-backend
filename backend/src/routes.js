const { Router } = require('express')

const TestController = require('./api/controllers/TestController')

const testController = new TestController()

const router = Router()

router.get('/test', testController.test)


module.exports = router