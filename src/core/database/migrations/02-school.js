exports.up = function(knex, Promise) {
    knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
   
   //knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
   
      return knex.schema.createTable('Teachers', function (table) {
         table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
         table.string('schoolId').notNullable()
         table.string('rank/position')
         table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
         table.timestamp('modifiedAt').notNullable().defaultTo(knex.fn.now())
         table.string('createdBy');
         table.string('modifiedBy')
       })
   
   }
   
   exports.down = function(knex, Promise) {
   
      return knex.schema.dropTable('DROP TABLE IF EXISTS public."Teachers" CASCADE')
   
   }