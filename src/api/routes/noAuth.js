
const Joi  = require('joi')
//import Joi from 'multi-user-core/joi'
//import {config} from 'multi-user-core/config'
//import config from '../../core/config'
const Boom = require ('@hapi/boom')
import userstore from '../datastore/userstore'
import helperfunctions from '../helperfunctions/authentication'
//import {authenticateUser} from '../helperfunctions/authentication'

//export default function login (server) => {
 //const routeFile = function (server) {
//store auth  not the routes
export default (server) => {
 // server.route({
 //     method: 'GET',
 //     path: '/auth/logout',
 //     config: {
 //       tags: ['api'],
 //       description: 'Signs a user out and removes their cookie1'
 //     },
 //      handler: function (request, handler) {
 //          return 'Hello World!';
 //        }
 //     //handler: (request, handler) => handleRestException(async () => {
 //       //let {id} = request.auth.credentials
 //       // Store users current token in db
 //       //await userstore.updateUserToken(id, null)
 //       //return handler.response().unstate('access_token')
 //     //})
 //   })

 //   server.route({
 //   method: 'GET',
 //   path: '/logout',
 //   config: {
 //     auth: true,
 //     tags: ['api'],
 //     validate: {
 //     payload: {
 //       id:Joi.string().required()
 //     },
 //     failAction: (request, handler, err) => {
 //             throw err;
 //             return;
 //   }
 //   },
 //     description: 'Signs a user out and removes their cookie'
 //   },
 //   handler: async (request, handler) => {
 //   //handler: (request, handler) => (async () => {
 //     //let {id} = request.auth.credentials
 //     let {id} = request.payload
 //     // Remove users current token in db
 //     const update = await userstore.removeUserToken(id, null)
 //     console.log(update)
 //     return handler.response('logout successfull')
 //     //return handler.response().unstate('access_token')
 //   }
 // })


 }
