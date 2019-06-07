exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    display_name: 'Mitch Cravens'
                },
                {
                   display_name: 'Troy Amelotte'
                },
            ])
        })
}