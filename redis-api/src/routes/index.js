const express = require('express')
const { storeRoute, retrieveRoute } = require('./redis-apis')

const app = express()

app.post('/store', storeRoute)

app.get('/retrieve', retrieveRoute)

module.exports = app