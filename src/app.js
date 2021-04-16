//const {hapi} = require('./core/framework/hapi')
import hapi from './core/framework/hapi'
//const {hapiServer} = require('./core/framework/hapi')
const {config} = require('./core/config');
const {db} = require('./core/db')
const {NODE_ENV} = require ('./core/config');
const path = require('path');
//const {Client} = require('pg');


// let combineApps = []
// process.argv.forEach(function (val, index, array) {
//   if (index >= 1) {
//     combineApps.push(val)
//     //print all the app paths
//     console.log(`Migration result: ${val}`)
//   }
// });

(async () => {
  //logger.info(`Starting application. ENV ${NODE_ENV}. DB ${JSON.stringify(config.database)}`)

  await db.migrate.latest ()               //([config.default.database])
      .then(function() {
          console.log(`Running seeds`)
          db.seed.run();
  })
  //await hapi.start(combineApps.map(app => path.resolve(__dirname, `./apps/${app}/src/routes`)))
  await hapi.start()
  console.log(`Starting server`)

  process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    })
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
