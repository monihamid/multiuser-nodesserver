//const {hapi} = require('./core/framework/hapi')
import hapi from './core/framework/hapi'
//const {hapiServer} = require('./core/framework/hapi')
const {config} = require('./core/config');
const {db} = require('./core/db')
const {NODE_ENV} = require ('./core/config');
const path = require('path');
//const {Client} = require('pg');

//Fred's way
let combineApps = []
process.argv.forEach(function (val, index, array) {
  if (index >= 2) {
    combineApps.push(val)
    console.log(`Migration result: ${val}`)
  }
});

(async () => {

  await db.migrate.latest([config.default.database])
      .then(function() {
          console.log(`Running seeds`)
          db.seed.run();
  })
  await hapi.start(combineApps.map(app => path.resolve(__dirname, `./apps/${app}/src/routes`)))
  //await hapi.start()
  console.log(`Starting server`)
})()


// (async () => {
//   //logger.debug(`Checking for db migrations`)
//   console.log(`Checking for db migrations`)
//   let migrationsResult = await db.migrate.latest([config.default.database]);
//   console.log(`Migration result: ${migrationsResult}`)
//   if (migrationsResult === 1) {
//   console.log(`Running seeds`)
//     await db.seed.run();
//   }
//
//   console.log('Starting application')
//   hapi.start()
// })()
