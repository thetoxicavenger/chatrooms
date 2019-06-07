exports.up = knex => {
    return knex.schema.createTable('users_rooms', function (table) {
        table.increments()
        table.integer('user_id')
        table.integer('room_id')
    })
}
exports.down = knex => {
    return knex.schema.dropTable('users_rooms')
}