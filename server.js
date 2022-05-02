const express = require('express')
const path = require('path')
const connectHistory = require('connect-history-api-fallback')

const app = express()
app.use(connectHistory(path.join(__dirname, 'dist')))

const port = process.env.PORT || 5000
app.listen(port)
console.log('server started: ' + port)
