exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('rooms')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('rooms').insert([
                {
                    name: 'Baseball Fanz'
                },
                {
                   name: 'Best of Reddit'
                },
            ])
        })
}