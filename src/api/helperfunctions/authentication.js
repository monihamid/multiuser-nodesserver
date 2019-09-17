import userstore from '../../api/datastore/userstore'
import aguid from 'aguid'
import jwt from 'jwt-simple'
import config from '../../core/config'
//import {InvalidCredentialsException} from 'zep-core/auth/token'
import bcrypt from 'bcrypt-nodejs';
//import {getDefaultError} from 'zep-core/error/defaultError'
import {generateToken, generateUserToken} from '../../core/framework/setauth'

//export const InvalidCredentialsException = getDefaultError('InvalidCredentialsException', 'Invalid credentials')
//export const InvalidCredentialsException = return('Invalid credentials')
export async function authenticateUser (user, password, rememberMe) {
//console.log ('==========')
const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// if want to configure how long session will be be valid
//let exp = await configstore.getSessionExpiryTime('SESSION_EXPIRY_TIME')
 //let exp = 24 * 60
//let hash = bcrypt.hashSync('admin');
  // Store hash in database
  //console.log (hash)


  //email = email.toLowerCase()
  //const user = await userstore.getByUserEmail(email)
  if (bcrypt.compareSync(password, user.password)) {
    //console.log(bcrypt(password))
    //token has {sid, token}
    let token = generateUserToken(user, rememberMe)         //  generateToken
    //console.log (token)
    //const user = await userstore.getByUserEmail(email);
    let updatedUser = await userstore.updateUserToken(user.id, token);

    //let updatedUser = await userstore.updateUserToken(user.id, token.token);
    return {
    'authToken': token,        //token.token,
    'updatedUser': updatedUser
  }

} else {
    //return('hashed fail(password does not match)')
    throw new Error('hashed fail(password does not match)')

  //throw new InvalidCredentialsException()
}

}

//more advanced token not using her just for look
// export function generateToken (user, exp) {
//   const sid = aguid()
//     exp = (Math.floor(new Date().getTime()) + exp) / 1000

//   // generate a new jwt token expiring in 24 hours
//   return {sid,
//     token: jwt.encode({
//       id: user.id,
//       sid: sid,
//       exp: exp || Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
//       // put the users authentication roles inside the jwt token
//       scope: user.scope
//     }, config.default.auth.jwtSecret)}
// }