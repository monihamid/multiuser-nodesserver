const knex = require ('knex')
const {NODE_ENV} = require('./config')
const pg  = require('pg');
const {config} = require ('./config')
//const knex = require('knex')('config.client')
//const database = require ('./config')
//config.default.hapi.port
let conn = pg;
//console.log(config)
let db = knex(config.default.database)
//let db = knex(config.database)


module.exports.db = db;

//let connection = {port:config.default.hapi.port, host: config.default.hapi.host, routes: {cors: {origin: ['*'], credentials: true}}}

//let connection = {port:config.default.hapi.port, host: config.default.hapi.host, routes: {cors: {origin: ['*'], credentials: true}}}
// var config      = require('../knexfile.js');
// var env         = 'development';
// var knex        = require('knex')(config[env]);
//
// module.exports = knex;
//
// knex.migrate.latest([config]);
// var db  = require('./db');
// db.knex()

//var config = require('./knexfile');

//module.exports = require('knex')(config);
