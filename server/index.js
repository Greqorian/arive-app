const express = require('express')
const cors = require('cors')
const users = require('./public/users')

const app = express()
const port = 3005

app.use(cors())

app.get('/', (req, res) => {
  res.send(users)
})

app.listen(port, () => console.log(`Test server listening on port ${port}!`))
