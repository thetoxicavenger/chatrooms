const express = require('express')
const bodyParser = require('body-parser')

const messagesRouter = require('./routes/messages')
const roomsRouter = require('./routes/rooms')
const usersRouter = require('./routes/users')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/api/messages', messagesRouter)
app.use('/api/rooms', roomsRouter)
// app.use('/api/users', usersRouter)

app.listen(3000 || process.env.PORT)