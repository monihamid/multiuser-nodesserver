exports.up = function(knex, Promise){
//return Promise.all([
return knex.schema.createTable('Users', function(table) {
  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'),
  knex.schema.createTable('Users', function (table) {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('email').notNullable();
      table.string('firstName');
      table.string('lastName');
      table.string('username');
      table.string('password');
      table.unique('email');
      table.json('scope');
      table.text('authToken');
      table.string('passwordResetKey');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('modifiedAt').notNullable().defaultTo(knex.fn.now());
      table.string('createdBy');
      table.string('modifiedBy');
    })
  })

//])

}

exports.down = function (knex, Promise) {
  //return Promise.all([
  return knex.schema.table('Users', function(table) {
  knex.raw('DROP TABLE IF EXISTS public."Users" CASCADE')
})
  //])
}
