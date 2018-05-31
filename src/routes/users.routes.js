import users from '../../dummy-data/users.json'

module.exports = {
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/users',
      handler: async (request, h) => users
    })
  },
  name: 'users.routes',
  version: '1.0.0'
}
