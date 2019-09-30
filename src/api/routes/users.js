const Joi  = require('joi')
const Boom = require ('@hapi/boom')
import userstore from '../datastore/userstore'
import helperfunctions from '../helperfunctions/authentication'
import {authenticateUser} from '../helperfunctions/authentication'

export default (server) => {
  
  server.route({
    method: 'POST',
    path: '/admin/add',
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

  server.route({
    method: 'POST',
    path: '/student/add',
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
            //email: Joi.string().required(),
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
      description: 'Adds a new student in the system'
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

  server.route({
    method: 'POST',
    path: '/teacher/add',
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
      description: 'Adds a new Teacher in the system'
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
