const app = require('express')()

app.all('/testDocument', (_, res) => {
  const doc = { title: 'space oddity' }
  res.json({ data: doc })
})

module.exports = app
