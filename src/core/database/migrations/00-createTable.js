//IF one table
// exports.up = function(knex, Promise) {
//  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

//    return knex.schema.createTable('Users', function (table) {
//       table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
//       table.string('email').notNullable()
//       table.string('firstName')
//       table.string('lastName')
//       table.string('username')
//       table.string('password')
//       table.unique('email')
//       table.json('scope')
//       table.text('authToken')
//       table.string('passwordResetKey')
//       table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
//       table.timestamp('modifiedAt').notNullable().defaultTo(knex.fn.now())
//       table.string('createdBy');
//       table.string('modifiedBy')
//     })

// }
// exports.down = function(knex, Promise) {

//    return knex.schema.dropTable('DROP TABLE IF EXISTS public."Users" CASCADE')

// }







// if multiple tables
 //exports.up = function(knex, Promise) {
  exports.up = function(knex) {
 return Promise.all([
   knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'),
   
   knex.schema.createTable('Users', function (table) {
   table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
   table.string('email').notNullable()
   table.string('firstName')
   table.string('lastName')
   table.string('username')
   table.string('password')
   table.unique('email')
   table.json('scope')
   table.text('authToken')
   table.string('passwordResetKey')
   table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
   table.timestamp('modifiedAt').notNullable().defaultTo(knex.fn.now())
   table.string('createdBy')
   table.string('modifiedBy')
 }),

   knex.schema.createTable('Schools', function (table) {
   table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
   table.string('schoolName').notNullable()
   table.string('schoolAddress')
   table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
   table.timestamp('modifiedAt').notNullable().defaultTo(knex.fn.now())
   table.string('createdBy')
   table.string('modifiedBy')
 })

])

}
//exports.down = function (knex, Promise) {
  exports.down = function(knex) {
   return Promise.all([
     knex.raw('DROP TABLE IF EXISTS public."Users" CASCADE'),
     knex.raw('DROP TABLE IF EXISTS public."Schools" CASCADE')
   ])
}
//https://github.com/tgriesser/knex/issues/3375
// The second argument Promise was removed in version 0.18.4:

// if multiple tables

// exports.up = function(knex, Promise) {
//     return Promise.all([
//         knex.schema.createTable('members', function (t) {
//             t.increments('id').primary();
//         }),
//         knex.schema.createTable('table2', function (t) {
//             t.increments('id').primary();
//         })
//     ]);
// };
