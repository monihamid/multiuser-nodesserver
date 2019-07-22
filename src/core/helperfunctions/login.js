import userstore from '../datastore/userstore'

//import bcrypt from 'bcrypt-nodejs';
//import {getDefaultError} from 'zep-core/error/defaultError'
//import {generateUserToken} from '../../framework/hapi/auth'

//export const InvalidCredentialsException = getDefaultError('InvalidCredentialsException', 'Invalid credentials')

export function authenticateUser (user, password, rememberMe) {
  if (bcrypt.compareSync(password, user.password)) {
    return generateToken(user, rememberMe)
  } else {
    throw new InvalidCredentialsException()
  }
}
export function varifyUser (user, password, rememberMe) {
  if ((password, user.password) && (email, user.email)) {
    return varifyUser('login successfull')
  } else {
    return varifyUser('Invalid Credential')
  }
}

export function generateToken(user, rememberMe) {
  const forever = 365 * 30 * 7 * 24 * 60 * 60 * 1000
  let cookieOptions = rememberMe ? {ttl: forever} : {};
  let jwt = generateUserToken(user, cookieOptions.ttl);
  return jwt
}


export async function login ({email, password}) {
    // randomize the result to prevent timing attacks
    await setTimeoutAsync(Math.floor(Math.random() * (500 + 1)))
    // Lookup existing user
    email = email.toLowerCase()
    const user = await userstore.getByUserEmail(email)

    // user not found
    if (!user) {
        //throw new UserNotFoundError()
        return internals.renderHtml.login('Missing username or password');
    }
    // else if (user.scope.indexOf(role) === -1) {
    //     throw new UserRoleInvalidError()
    // }


    // throws InvalidCredentialsException
    // return {authToken: await authenticateUser(user, password, rememberMe), user}
    return {
      //  'authToken': authToken,
        'user': updatedUser[0],
        //'accessParams': base64
    }
}
