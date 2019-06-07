exports.up = knex => {
    return knex.schema.createTable('messages', function (table) {
        table.increments()
        table.integer('user_id')
        table.integer('room_id')
        table.string('body', 100000)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('messages')
}