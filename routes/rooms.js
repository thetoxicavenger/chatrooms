const express = require('express')

const router = express.Router()

const { getAll, postOne } = require('../controllers/rooms')

router.get('/', getAll)

router.post('/', postOne)

module.exports = router