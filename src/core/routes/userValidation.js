const Joi  = require('joi')


export default (server) => {
 server.route({
     method: 'GET',
     path: '/books',
     config: {
       tags: ['api'],
       description: 'Signs a user out and removes their cookie3'
     },
      handler: function (request, handler) {
         return 'Hello World!';
       }
     //handler: (request, handler) => handleRestException(async () => {
       //let {id} = request.auth.credentials
       // Store users current token in db
       //await userstore.updateUserToken(id, null)
       //return handler.response().unstate('access_token')
     //})
   });

   server.route({
       method: 'GET',
       path: '/test',
       config: {
         tags: ['api'],
         description: 'Signs a user out and removes their cookie2'
       },
        handler: function (request, handler) {
           return 'Hello Test!';
         }
       //handler: (request, handler) => handleRestException(async () => {
         //let {id} = request.auth.credentials
         // Store users current token in db
         //await userstore.updateUserToken(id, null)
         //return handler.response().unstate('access_token')
       //})
     })
 }


// export default (server) => {
//  server.route({
//    method: 'GET',
//        path: '/books',
//        config: {
//          tags: ['api'],
//          description: 'Signs a user out and removes their cookie'
//        },
//        handler: function (request, handler) {
//           return 'Books';
//         }
//
// });
//
// server.route({
//     method: 'GET',
//     path: '/auth/logoutnew',
//     config: {
//       tags: ['api'],
//       description: 'Signs a user out and removes their cookie'
//     },
//      handler: function (request, handler) {
//         return 'Hello World!';
//       }
//     //handler: (request, handler) => handleRestException(async () => {
//       //let {id} = request.auth.credentials
//       // Store users current token in db
//       //await userstore.updateUserToken(id, null)
//       //return handler.response().unstate('access_token')
//     //})
//   })
// }

// module.exports = function (server) {
// server.route({
//     method: 'GET',
//     path: '/books',
//     options: {
//     	description: 'Get books list',
//         notes: 'Returns an array of books',
//         tags: ['api'],
//         handler: async (request, h) => {
//             const books = await readFile('./books.json', 'utf8');
//             return h.response(JSON.parse(books));
//         }
//     }
// });
// }
