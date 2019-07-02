//import Users from "../seedfile/Users"

const Users = require('../seedfile/User')



exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Users').del()
        .then(function () {
            // Inserts seed entries
            return knex('Users').insert(Users);
        });
};

//iF multipele seedfile

// exports.seed = function (knex, Promise) {
//   //return Promise.all([
//           // Inserts seed entries
//           knex('Users').insert(Users)
//     //  ])
// //)
// }
