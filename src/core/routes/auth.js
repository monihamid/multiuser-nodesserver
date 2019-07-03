
//export default function login (server) => {
const login = function (server) {
//export default (server) => {
  server.route({
      method: 'GET',
      path: '/auth/logout',
      config: {
        tags: ['api'],
        description: 'Signs a user out and removes their cookie'
      },
      handler: (request, handler) => handleRestException(async () => {
        let {id} = request.auth.credentials
        // Store users current token in db
        await userstore.updateUserToken(id, null)
        return handler.response().unstate('access_token')
      })
    })



}

module.exports.login = login;
//const config = {
// var User = function(name, email) {
//   this.name = name;
//   this.email = email;
// };
// module.exports = User;
