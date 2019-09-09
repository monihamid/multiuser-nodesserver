

export default (server) => {
  

  server.route({
      method: 'GET',
      path: '/user/add',
      config: {
        tags: ['api'],
        description: 'Add a new user with scope'
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
    })


}
