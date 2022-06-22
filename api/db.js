const app = require('express')()
const { MongoClient } = require('mongodb')

// Get all songs
app.all('/songs', async (_, res) => {
  const client = new MongoClient('mongodb://localhost')
  await client.connect()

  client.db('mydb').collection('songs').find().toArray().then((songs) => {
    res.json({ data: songs })
  })
})

module.exports = app
