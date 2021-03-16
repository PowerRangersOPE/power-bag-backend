const Test = require('../models/Test')

class TestController {

    async create(req, res) {
        const { name, age } = req.body

        const test = await Test.create({ name, age })

        return res.json(test)
    }

    async show(req, res) {
        const allTests = await Test.findAll()

        return res.json(allTests)
    }
}

module.exports = TestController