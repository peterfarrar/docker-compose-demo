http = require('http')
const express = require('express')
const options = require('../options')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

app.get('/', (req, res) => {
  return res.status(200).send({ status: 'OK' })
})

const port = options.port
app.set('port', port)
const server = http.createServer(app)
server.listen(port)

console.log(`service started on port ${port}...`)

module.exports = server