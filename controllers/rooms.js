const knex = require('../db/knex')

module.exports = {
    getAll: (req, res) => {
        knex('rooms')
        .then(rooms => {
            return res.json(rooms)
        })
        .catch(e => {
            console.error(e)
            return res.sendStatus(500)
        })
    },
    postOne: (req, res) => {
        if (!req.body || !req.body.name || typeof req.body.name === 'undefined') {
            return res.sendStatus(422)
        }
        knex('rooms')
        .insert(req.body)
        .returning('*')
        .then(rooms => {
            res.json(rooms[0])
        })
        .catch(e => {
            console.error(e)
            return res.sendStatus(500)
        })
    },
    deleteOne: (req, res) => {
        if (!req.params.id) return res.sendStatus(422)
        knex('rooms')
        .where('id', req.params.id)
        .then(rooms => {
            if (!rooms.length) return res.sendStatus(404)
            return rooms
        })
        .del()
        .then(() => {   
            return res.sendStatus(200)
        })
        .catch(e => {
            console.error(e)
            return res.sendStatus(500)
        })
    }
}