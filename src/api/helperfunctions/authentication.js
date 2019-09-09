import userstore from '../../api/datastore/userstore'
import aguid from 'aguid'
import jwt from 'jwt-simple'
import config from '../../core/config'
//import {InvalidCredentialsException} from 'zep-core/auth/token'
import bcrypt from 'bcrypt-nodejs';
//import {getDefaultError} from 'zep-core/error/defaultError'
import {generateToken} from '../../core/framework/setauth'

//export const InvalidCredentialsException = getDefaultError('InvalidCredentialsException', 'Invalid credentials')
//export const InvalidCredentialsException = return('Invalid credentials')
export async function authenticateUser (user, password, rememberMe) {
console.log ('==========')
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
    let token = generateToken(user, rememberMe)
    //console.log (token)
    //const user = await userstore.getByUserEmail(email);
    //let updatedUser = updateUserToken(user.id, token);

    let updatedUser = await userstore.updateUserToken(user.id, token.token);
    return {
    'authToken': token.token,
    'updatedUser': updatedUser
  }

} else {
    //return('hashed fail(password does not match)')
    throw new Error('hashed fail(password does not match)')

  //throw new InvalidCredentialsException()
}

}
