//import db from '../db'
const {db} = require ('../db')

export default {
  getByUserEmail:(email) => {
   return db('Users').where({email}).first()
       // .whereRaw(`LOWER(email) LIKE ?`, [`${email.toLowerCase()}`])
      
 },
  checkUserExist: (id) => {
      return db('Users').where({id}).first()
    },
    getInfoByUserEmail: (email) => {
    return db('Users').where({email}).first()
        .select('id', 'firstName', 'lastName', 'email', 'scope')
  }

}
