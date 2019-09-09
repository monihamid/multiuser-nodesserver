//const jwt = require('hapi-auth-jwt2')
import jwt from 'jwt-simple'
//import {config} = require( '../config')
import aguid from 'aguid'
const {config} = require( '../config')

//import config from '../config'

const validate = async function (decoded, request) {
 let credentials = decoded || {}
    // do your checks to see if the person is valid
    if (!credentials) {
      return { isValid: false }
    }
    else {

      //you can add expire time here
      return { isValid: true }
    }
}

export function setupAuth (server) {
server.auth.strategy('jwt', 'jwt',             //'jwt-cookie',
 {
    key:config.default.auth.jwtSecret, // you can add to config file
    validate: validate, // validate function defined above
    verifyOptions: {algorithms: ['HS256']} // pick a strong algorithm
    })
  server.state('access_token', {
  ttl: null,
  isSecure: false,
  isHttpOnly: false,
  clearInvalid: true, // remove invalid cookies
  strictHeader: false, // don't allow violations of RFC 6265
  isSameSite: 'Lax',
  path: '/'
})

server.auth.default('jwt')
}
//more advanced token
export function generateToken (user, exp) {
  const sid = aguid()
    exp = (Math.floor(new Date().getTime()) + exp) / 1000

  // generate a new jwt token expiring in 24 hours
  return {sid,
    token: jwt.encode({
      id: user.id,
      sid: sid,
      exp: exp || Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
      // put the users authentication roles inside the jwt token
      scope: user.scope
    }, config.default.auth.jwtSecret)}
}

// export function generateToken (user, rememberMe, exp) {
//
//   const forever = 365 * 30 * 7 * 24 * 60 * 60 * 1000
//   let cookieOptions = rememberMe ? {ttl: forever} : {ttl: exp}
//
//
//   return generateUserToken(user, cookieOptions.ttl)
// }

export function generateUserToken (user, exp) {
  let jwt = generateToken(user, exp)
  return jwt.token
}
// export function generateUserToken(user, exp){
//   let jwt = generateToken(user, exp);
//   return jwt.token;
// }
//365 * 30 * 7 * 24 * 60 * 60 * 1000
// export function generateToken(user, rememberMe) {
//   const forever =  24 * 60 * 60 * 1000
//   let cookieOptions = rememberMe ? {ttl: forever} : {};
//   let jwt = generateUserToken(user, cookieOptions.ttl);
//   return jwt
// }
