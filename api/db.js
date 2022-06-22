const app = require('express')()
const { MongoClient, ObjectId } = require('mongodb')

app.all('/testDocument', (_, res) => {
  const doc = { title: 'space oddity' }
  res.json({ data: doc })
})

// Get all songs
app.all('/songs', async (_, res) => {
  const client = new MongoClient('mongodb://localhost')
  await client.connect()

  client.db('mydb').collection('songs').find().toArray().then((songs) => {
    res.json({ data: songs })
  })
})

// Get a song by id
app.all('/song/:id', async (req, res) => {
  const client = new MongoClient('mongodb://localhost')
  await client.connect()

  client.db('mydb').collection('songs').findOne({ _id: ObjectId(req.params.id) }).then((song) => {
    console.log(song)
    res.json({ data: song })
  })
})

module.exports = app
