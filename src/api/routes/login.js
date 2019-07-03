

export default (server) => {
  server.route({
      method: 'POST',
      path: '/admin/login',
      config: {
        auth: false,
        tags: ['api'],
        validate: {
          payload: {
            email: Joi.string().email(),
            password: Joi.string().required(),
            rememberMe: Joi.boolean()
          },
          failAction
        },
        description: 'Authenticate an admin, returns an auth cookie'
      },
      handler: (request, handler) => handleRestException(async () => {
        try {
          let {authToken, user, accessParams} = await login(request.payload, 'admin')
          return handler.response({authToken, user, accessParams}).state('access_token', authToken)
        } catch (e) {
          if (e instanceof InvalidCredentialsException) {
            logger.info(`User ${request.payload.email} had an unsuccessful signin attempt`)
            return Boom.unauthorized()
          } else if (e instanceof UserNotFoundError) {
            logger.info(`User ${request.payload.email} tried to login but no account exists`)
            return Boom.unauthorized()
          } else if (e instanceof UserRoleInvalidError) {
            logger.info(`User ${request.payload.email} tried to login but did not have a valid role for this application`)
            return Boom.unauthorized()
          } else {
            logger.error(e)
            return Boom.internal()
          }
        }
      })
    })




}
