const Joi  = require('joi')
const Boom = require ('@hapi/boom')
import userstore from '../datastore/userstore'
import helperfunctions from '../helperfunctions/authentication'
import {authenticateUser} from '../helperfunctions/authentication'
//import failAction from '../framework/hapi'

export default (server) => {
 server.route({
     method: 'POST',
     path: '/login',
     config: {
       auth: false,
       tags: ['api'],
       validate: {
        payload: {
          email: Joi.string().email(),
          password: Joi.string().required(),
          rememberMe: Joi.boolean()
        },
        failAction: (request, handler, err) => {
                throw err;
                return;
      }
      },
       description: 'Signs a user to Multiuser server'
     },
      handler: async (request, handler) => {

        let {email, password, rememberMe} = request.payload
        email= email.toLowerCase()
       //  const user = await userstore.getByUserEmail(email);
       //
       //  if (!user) {
       //  return Boom.unauthorized('User name/email does not exist')
       // }
       // let {authToken, updatedUser} = await authenticateUser(user, password, rememberMe);
       //   //console.log(authToken)
       //    console.log(updatedUser)
       try {
         const user = await userstore.getByUserEmail(email);

         if (!user) {
         return Boom.unauthorized('User name/email does not exist')
       } else {
         let {authToken, updatedUser} = await authenticateUser(user, password, rememberMe);
           //console.log(authToken)
            //console.log(updatedUser)
         console.log('try block')
        //state need one object so,authToken.token has only token but authToken has sid: token: so
        //Error: Invalid cookie value: [object Object]
        return handler.response({authToken, updatedUser}).state('access_token', authToken)
      }
      } catch (e) {
        if (e.message === 'hashed fail(password does not match)') {

          return Boom.unauthorized('password does not match')
        //console.log('error block')

      }else {
        // catch database connection fail or datatable doesnot exist error
        console.log(`Log:${e}`)
        return Boom.unauthorized('unknown error occour')

      }
    }

       }

   })


 }
