exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users_rooms')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users_rooms').insert([
                {
                    user_id: 1,
                    room_id: 1
                },
                {
                   user_id: 2,
                   room_id: 2
                },
            ])
        })
}