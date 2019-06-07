const express = require('express')
const knex = require('./db/knex')

const app = express()

app.listen(3000 || process.env.PORT)