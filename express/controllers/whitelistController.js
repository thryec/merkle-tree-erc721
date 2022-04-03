const express = require('express')
const app = express()
const methodOverride = require('method-override')
const Whitelist = require('../models/whitelistModel')
const whitelistSeed = require('../models/whitelistSeed')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  try {
    const whitelist = await Whitelist.find()
    console.log(whitelist)
    res.send(whitelist)
  } catch (err) {
    res.status(500).send('Error occurred while retreiving whitelist')
    return
  }
})

app.get('/seed', async (req, res) => {
  try {
    const seedWhitelist = await Whitelist.create(whitelistSeed)
    res.send(seedWhitelist)
  } catch (err) {
    res.send(err.message)
  }
})

// add address to whitelist
app.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const user = await Whitelist.create(req.body)
    console.log(user)
    res.send(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Error occurred while adding to whitelist')
  }
})

// check if address is in whitelist
app.post('/verify', async (req, res) => {
  console.log(req.body)
  res.send('hello world')
})

module.exports = app
