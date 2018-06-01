import Code from 'code'
import Lab from 'lab'
import Server from '../../../../src/server/index'

const { describe, it, beforeEach } = (exports.lab = Lab.script())

const { expect } = Code

describe('GET /users/{username?}', () => {
  let request, server, response

  beforeEach(async () => {
    request = {
      method: 'GET',
      url: '/users'
    }
    server = await Server.deployment()
    response = await server.inject(request)
  })

  it('returns an array of users', async () => {
    const { payload } = response
    expect(JSON.parse(payload)).to.be.an.array()
  })

  it('returns HTTP status code 200', async () => {
    const { statusCode } = response
    expect(statusCode).to.equal(200)
  })

  it('returns the matching user given a username', async () => {
    const paramRequest = { ...request, url: '/users/tedb' }
    response = await server.inject(paramRequest)
    const { payload } = response
    expect(JSON.parse(payload)).to.be.an.array()
  })
})
