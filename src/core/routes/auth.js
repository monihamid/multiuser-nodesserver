
const Joi  = require('joi')
//import config from   '/multi-user-core/config'

//export default function login (server) => {
 //const routeFile = function (server) {

export default (server) => {
 server.route({
     method: 'GET',
     path: '/auth/logout',
     config: {
       tags: ['api'],
       description: 'Signs a user out and removes their cookie1'
     },
      // handler: function (request, handler) {
      //    return 'Hello World!';
      //  }
     handler: (request, handler) => handleRestException(async () => {
       //let {id} = request.auth.credentials
       // Store users current token in db
       //await userstore.updateUserToken(id, null)
       //return handler.response().unstate('access_token')
     })
   })
   server.route({
       method: 'GET',
       path: '/auth/newlogout',
       config: {
         tags: ['api'],
         description: 'Signs a user out and removes their cookie4'
       },
        handler: function (request, handler) {
           return 'Hello newlogout!';
         }
       //handler: (request, handler) => handleRestException(async () => {
         //let {id} = request.auth.credentials
         // Store users current token in db
         //await userstore.updateUserToken(id, null)
         //return handler.response().unstate('access_token')
       //})
     })


 }


//module.exports.routeFile = routeFile;
// module.exports = function (server) {
// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, h) {
//
//         return 'Hello World!';
//     }
// });
// }
//const config = {
// var User = function(name, email) {
//   this.name = name;
//   this.email = email;
// };
// module.exports = User;
// function square(x) {
//     return x * x;
// }
// function diag(x, y) {
//     return sqrt(square(x) + square(y));
// }
// module.exports = {
//     sqrt: sqrt,
//     square: square,
//     diag: diag,
// };
