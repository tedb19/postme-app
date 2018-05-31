import Glue from 'glue'

import manifest from './manifest.json'

exports.deployment = async start => {
  const server = await Glue.compose(manifest, {
    relativeTo: __dirname
  })
  await server.initialize()

  if (!start) return server

  await server.start()
  console.log(`Server running @ ${server.info.uri}`)
  return server
}

if (!module.parent) {
  exports.deployment(true)

  process.on('unhandledRejection', err => {
    console.log(err)
    process.exit(1)
  })
}
