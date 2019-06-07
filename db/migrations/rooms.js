exports.up = knex => {
    return knex.schema.createTable('rooms', function (table) {
        table.increments()
        table.string('name', 30)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('rooms')
}