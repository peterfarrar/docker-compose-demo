const redis = require('redis')
const options = require('../../options')
const client = redis.createClient(`redis://${options.redisHost}:${options.redisPort}`)

client.on("error", (error) => {
  console.log(error)
})

const storeRoute = (req, res) => {
  console.log(`Inside POST /store with ${req.body}`)

  const { key, value } = req.body

  client.set(key, value, (err, result) => {
    if (err) {
      return res.status(400).send(err.message)
    }
    return res.send(JSON.stringify({ [key]: value }))
  })
}

const retrieveRoute = (req, res) => {
  console.log(`Inside POST /store with ${req.query}`)
  const { key } = req.query

  client.get(key, (err, result) => {
    if (err) {
      return res.status(400).send(err.message)
    }
    return res.send(result)
  })
}

module.exports = {
  storeRoute,
  retrieveRoute
}