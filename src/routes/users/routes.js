import Joi from 'joi'
import { usersHandler } from './handlers'

module.exports = {
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/users/{username?}',
      handler: async (request, h) => {
        return usersHandler(request.params.username)
      },
      options: {
        description:
          'Fetches a list of users. If username is supplied, returns the user that matches that username',
        tags: ['api', 'users'],
        cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
        },
        validate: {
          params: {
            username: Joi.string()
              .min(3)
              .max(10)
              .description('username must be between 3 and 10 characters!')
          }
        }
      }
    })
  },
  name: 'users.routes',
  version: '1.0.0'
}
