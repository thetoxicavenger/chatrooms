exports.up = knex => {
    return knex.schema.createTable('users', function (table) {
        table.increments()
        table.string('display_name', 30)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('users')
}