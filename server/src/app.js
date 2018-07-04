const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 8081

const app = express()

app.use(morgan('combined'))
app.use(json())
app.use(cors())

// ENDPOINTS
app.get('*', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
