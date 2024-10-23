const express = require('express')
const app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send('My second server is running')
  })
app.get('/data', (req, res) => {
    res.send('Raju mama is comming')
  })

  

  

  app.listen(port, () => {
    console.log(`My second server is running: ${port}`)
  })
