const app = require('./app')
const { server } = require('./config')

app.listen(server.port, () => {
    console.log(`Servers's running 🚀️`)
})