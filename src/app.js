const {hapi} = require('./core/framework/hapi')
const {config} = require('./core/config');

(async () => {
  console.log(`Starting server`)
  hapi.start()
})()
