exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('messages')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('messages').insert([
                {
                    user_id: 1,
                    room_id: 1,
                    body: "I love baseball! let's get the conversation started."
                },
                {
                    user_id: 2,
                    room_id: 2,
                    body: "I love reddit! let's get the conversation started."
                },
            ])
        })
}