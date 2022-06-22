const app = require('express')()
const { MongoClient } = require('mongodb')

app.all('/testDocument', (_, res) => {
  const doc = { title: 'space oddity' }
  res.json({ data: doc })
})

// Get all songs
app.all('/allSongs', async (_, res) => {
  const client = new MongoClient('mongodb://localhost')
  await client.connect()

  client.db('mydb').collection('songs').find().toArray().then((songs) => {
    res.json({ data: songs })
  })
})

module.exports = app
