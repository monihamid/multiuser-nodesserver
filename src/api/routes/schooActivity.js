const Joi  = require('joi')
const Boom = require ('@hapi/boom')
//import helperfunctions from '../helperfunctions/authentication'
//import {authenticateUser} from '../helperfunctions/authentication'
import userstore from '../datastore/userstore'
import {generateSchoolID} from '../helperfunctions/schoolFunc'
//import helperfunctions from '../helperfunctions/authentication'
//import {authenticateUser} from '../helperfunctions/authentication'

//export default function login (server) => {
 //const routeFile = function (server) {
//store auth  not the routes
export default (server) => {

    server.route({
        method: 'POST',
        path: '/school/add',
        config: {
          auth: 
          {
            access: {
          scope: ['admin']
            }
            },
      
          tags: ['api'],
          validate: {    
          payload: {
                schoolName: Joi.string().required(),
                contactPerson: Joi.string(),
                streetNo: Joi.string().required(), 
                streetName: Joi.string().required(), 
                postalcode: Joi.string(),
                city: Joi.string(),
                province: Joi.string(),
                country: Joi.string(),
                schoolPhone: Joi.string(),
                schoolEmail: Joi.string().email()           
          },
          failAction: (request, handler, err) => {   
            throw err;                 
                  return;
        }
        
        },
          description: 'Adds a new school in the system'
        },
        handler: async (request, handler) => {
                let {schoolName, contactPerson, streetNo, streetName, postalcode, city, province, country,
                    schoolPhone, schoolEmail} = request.payload
                schoolEmail = schoolEmail.toLowerCase()
           
          try {
            
            let schoolId =  await generateSchoolID(schoolName, streetNo, streetName)
            let schoolIdexist; //check if the school already in the system from database 
             if (schoolIdexist) {
              return Boom.notAcceptable('SchoolID alreay exist')
            } else {
              //let { id } = request.auth.credentials
              //console.log(id)
              const userEmail = await userstore.getEmailByUserId(request.auth.credentials.id)
              //console.log(userEmail)
              request.payload.createdBy = userEmail.email       //request.auth.credentials.id
              request.payload.schoolId = schoolId
              let school = await userstore.addSchool(request.payload)
              return handler.response( 'new school added')
         }
         } catch (e) {
          
           // catch database connection fail or datatable doesnot exist error
           console.log(`Log:${e}`)
           return Boom.clientTimeout(`${e}`)
         
       }
        }
      })


 }


 