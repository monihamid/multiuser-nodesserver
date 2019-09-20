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

       try {
         const user = await userstore.getByUserEmail(email);

         if (!user) {
         return Boom.unauthorized('User name/email does not exist')
       } else {
         let {authToken, updatedUser} = await authenticateUser(user, password, rememberMe);
           
        //state need one object so,authToken.token has only token but authToken has sid: token: so
        return handler.response({authToken, updatedUser}).state('access_token', authToken)
      }
      } catch (e) {
        if (e.message === 'hashed fail(password does not match)') {

          return Boom.unauthorized('password does not match')
        
      }else {
        // catch database connection fail or datatable doesnot exist error
        console.log(`Log:${e}`)
        return Boom.clientTimeout(`${e}`)
      }
    }
       }
   })
//not working
   server.route({
       method: 'GET',
       path: '/logout',
       config: {
         tags: ['api'],
         description: 'Signs a user out and removes their cookie'
       },
       handler: async (request, handler) => {
         let { id } = request.auth.credentials
         //console.log(id)
         
           // Remove users current token in db
           try {
             const update = await userstore.updateUserToken(id, null)
             //console.log(update)
             return handler.response('logout successfull').unstate('access_token')
           } catch (e) {
             console.log(`Log:${e}`)
             return Boom.clientTimeout(`${e}`)
             }
         }
     })

  server.route({
  method: 'POST',
  path: '/user/add',
  config: {
    auth: 
    {
      access: {
    scope: ['admin']
      }
      },

    tags: ['api'],
    validate: {
      // headers: Joi.object({
      //   'authorization': Joi.string().required()
      // }),
      
    payload: {
          email: Joi.string().required(),
          firstName: Joi.string(),
          lastName: Joi.string(),
          username: Joi.string(),
          password: Joi.string().required(),
          scope: Joi.any().required()
    },
    failAction: (request, handler, err) => {
      
      throw err;
            
            return;
  }
  
  },
    description: 'Adds a new user in the system'
  },
  handler: async (request, handler) => {
          let {email, firstName, lastName, username, password, scope} = request.payload
          email= email.toLowerCase()
     
    try {
      // console.log('========')
      // console.log(request.auth)
      let existUser = await userstore.getByUserEmail(email)
      if (existUser) {
        return Boom.notAcceptable('User alreay exist')
      } else {
        //let { id } = request.auth.credentials
        //console.log(id)
        const userEmail = await userstore.getEmailByUserId(request.auth.credentials.id)
        console.log(userEmail)
        request.payload.createdBy = userEmail.email       //request.auth.credentials.id
        let user = await userstore.createUser(request.payload)
        return handler.response( 'new user created')
   }
   } catch (e) {
    
     // catch database connection fail or datatable doesnot exist error
     console.log(`Log:${e}`)
     return Boom.clientTimeout(`${e}`)
   
 }
  }
})


 }
//https://www.npmjs.com/package/boom

