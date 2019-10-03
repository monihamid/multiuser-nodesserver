//const jsonMerger = require('json_merger')
import jsonMerger from 'json_merger'
//const knex  = require('knex');
//const pg  = require('pg');


 const config = {
 
  default: {
    database: {
      client: 'pg',
      connection: {
        database: process.env.POSTGRES_DATABASE || 'multiUsers',
        port: process.env.POSTGRES_PORT || 5432,
        user: process.env.POSTGRES_USER || 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        password: process.env.POSTGRES_PASSWORD || 'postgres'         //'postgres'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/database/migrations'
      },
      seeds: {
        directory: __dirname + '/database/seeds'
      }
    },
    logger: {
       level: 'debug',
       debug: true
     },
     // hapi server starting port and host
     hapi:{
       port: process.env.API_PORT || 3000,
       host: process.env.API_HOST || 'localhost',
       prefix: '/api/v1',
       swagger: {
         host: process.env.SWAGGER_HOST || undefined,
         schemes: ['http']
       }
     },

    auth: {
      jwtSecret: process.env.JWT_SECRET || 'secret',
    }
  },
    local: {
    letsencrypt: {
      enabled: false
    },
    database: {
      debug: false
    },
    label: {
      host: 'http://localhost:3000/api/v1'
      // host: 'http://192.1.2.179:4000/api/v1'
    },

  },
  
  production: {
    letsencrypt: { 
      enabled: false
    },
    ssl:{
      enabled: true
    },
    database: {
      debug: false
    },
    hapi: {
      swagger: {
          host: process.env.SWAGGER_HOST || undefined,
          schemes: ['https']
      }
    },
    // label: {
    //   host: 'https://nodeserverm.appspot.com/api/v1'
    // },
  }
}

// this is duplicate of export default
module.exports.config = config;
//module.export default jsonMerger.merge(config.default, config[NODE_ENV] || {})
//module.exports.hapi = hapi;




//this set environment for could server
export const NODE_ENV = process.env.NODE_ENV || 'local'
export default jsonMerger.merge(config.default, config[NODE_ENV] || {})


//https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/    ES6 Imports
