const jsonMerger = require('json_merger')

//import coreConfig from 'zep-core/config'
//import {NODE_ENV} from 'zep-core/config'

const config = {
  default:{
    // databese conenction
    database: {
      client: 'pg',
      connection: {
        database: 'postgres',
        port: process.env.DB_PORT || 5432,
        user: process.env.POSTGRES_USER || 'postgres',
        host: process.env.DB || 'localhost',  //add the ip address for pg admin to connet to different database
        password: process.env.POSTGRES_PASSWORD || '',
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/database/migrations'
      },
      seeds: {
        directory: __dirname + '/database/seeds/development'
      }
    },
    logger: {
       level: 'debug',
       debug: true
     },
     // hapi server starting port and host
     hapi: {
       port: process.env.API_PORT || 3000,
       host: process.env.API_HOST || 'localhost',
       prefix: '/api/v1',
       swagger: {
         host: process.env.SWAGGER_HOST || undefined,
         schemes: ['http']
       }
     },



    auth: {
      jwtSecret: process.env.JWT_SECRET || 'dkdD9dJS8s*&sJs@@djs8J',
    },
    database: {
      debug: true
    }
  }
}
module.exports.NODE_ENV = process.env.NODE_ENV || 'local'  // not sure wher to use
//module.exports.config = jsonMerger.merge(config.default)
module.exports.config = config;

//export default jsonMerger.merge(config.default, config[NODE_ENV] || {})


//https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/    ES6 Imports
