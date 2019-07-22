const Joi  = require('joi')
import userstore from '../datastore/userstore'
import helperfunctions from '../helperfunctions/login'

export default (server) => {
 server.route({
     method: 'POST',
     path: '/login',
     config: {
       tags: ['api'],
       validate: {
        payload: {
          email: Joi.string().email(),
          password: Joi.string().required(),
          rememberMe: Joi.boolean()
        },
        //failAction
      },
       description: 'Signs a user to Multiuser server'
     },
      handler: async (request, handler) => {

        const {email, password, rememberMe} = request.payload
        const user = await userstore.getByUserEmail(email);
        //console.log(user)
        // if (!username || !password) {
        // return internals.renderHtml.login('Missing username or password');
        //
        // }
        if (!user) {
        return 'No user found'
       }
       else if ((password === user.password) && (email === user.email)) {
         return 'login successfull'
       } else {
         return 'Invalid Credential'
       }

       try {

         //await helperfunctions.varifyUser(email, password, user)
         //return 'log in successfull'
        //let token = await authenticateUser(user, password, rememberMe)
        //return handler.response().state('access_token', token)

      } catch (e) {
        // if (e instanceof InvalidCredentialsException) {
        //   return 'unauthorized'
        // } else {
        //   //logger.error(e)
        //   throw e
        // }
      }

       }

   })


 }
