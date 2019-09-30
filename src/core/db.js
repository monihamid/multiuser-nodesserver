const knex = require ('knex')
//onst {NODE_ENV} = require('./config')
const pg  = require('pg');
const {config} = require ('./config')

//console.log(config)
let db = knex(config.default.database)
//let db = knex(config.database)


module.exports.db = db;

