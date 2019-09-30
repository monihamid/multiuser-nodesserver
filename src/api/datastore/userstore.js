//import db from '../db'
const {db} = require ('../../core/db')
import {saltedPassword, convertScopeToJSON} from '../helperfunctions/convertor'

export default {
  getByUserEmail:(email) => {
   return db('Users').where({email}).first()
       // .whereRaw(`LOWER(email) LIKE ?`, [`${email.toLowerCase()}`])

 },
 getEmailByUserId: (id) => {
  return db('Users')
  .select('email').where({id}).first()
  //return db('Users').where({id, id})
         //.select('email')
      // .whereRaw(`LOWER(email) LIKE ?`, [`${email.toLowerCase()}`])

},
  checkUserExist: (id) => {
      return db('Users').where({id}).first()
    },
    getInfoByUserEmail: (email) => {
    return db('Users').where({email}).first()
        .select('id', 'firstName', 'lastName', 'email', 'scope')
  },
  removeUserToken: (id, authToken) => {
  return db('Users').where({ id: id }).update({'authToken': authToken}).returning('*')
},

updateUserToken: (id, authToken) => {
return db('Users').where({id}).update({authToken}).returning('*')
},
// updateDriverApproval: (userId) => {
//   return db('Drivers').where({userId}).update({'approved': false})
// },
createUser: async ({email, firstName, lastName, username, password, scope, createdBy}) => {
  /** createdBy is reserved for future use */
  if (scope === undefined || scope === '') {
    return 'Error: scope is required.'
  }
  email = email.toLowerCase()
  scope =  await convertScopeToJSON(scope)
  password = await saltedPassword(password)
  return db('Users').insert({email, firstName, lastName, username, password, scope, createdBy}).returning('id')
},
addSchool: async ({schoolId, schoolName, contactPerson, streetNo, streetName, postalcode, city, province, country,
  schoolPhone, schoolEmail, createdBy }) => {
  return db('Schools').insert({schoolId, schoolName, contactPerson, streetNo, streetName, postalcode, city, province, country, schoolPhone, schoolEmail, createdBy}).returning('schoolId')
}


}
