

export default (server) => {
  

  server.route({
    method: 'GET',
    path: '/admin',
    config: {
      tags: ['api'],
      description: 'Test only admins can access this route',
      auth: {
        access: {
          scope: ['admin']
        }
      }
    },
    handler: (request, handler) => {
      return handler.response('Success!!!!!!!!').code(200)
    }
  })

}
