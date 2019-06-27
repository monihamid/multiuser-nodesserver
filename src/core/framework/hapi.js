const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const fs = require('fs')
const {config} = require( '../config')
const routesFolder = __dirname + '../routes';


let server;


//plugins.push(Inert)
//plugins.push(Vision)
const plugins = [
  {
    plugin: require('hapi-api-version'),
    options: {
      validVersions: [1],
      defaultVersion: 1,
      vendorName: 'ZepPack'
    }
  },
  //require('hapi-auth-cookie-jwt')
];
const hapi = {
//export default {
  start: async () => {
      if (server)
        return server

      try {
        let connection = {port:config.default.hapi.port, host: config.default.hapi.host, routes: {cors: {origin: ['*'], credentials: true}}}
        server = new Hapi.Server(connection)
        //server.realm.modifiers.route.prefix = '/api/v1';

        //await server.register(plugins)
        //setupAuth(server)
        await server.start()
        //logger.info(`API Server running at: ${server.info.uri}`)
        console.log(`Server is running at ${server.info.uri}`);
        //createRoutes(server);
        return server
      } catch (e) {
        //logger.error(e);
        throw e
      }
    }

  }
//module.exports.server = server;


  module.exports.hapi = hapi;
