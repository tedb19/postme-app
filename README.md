# Reference App Backend:

This is the backend app for the _Reference App_. It will showcase the following technologies/functionality:

```
* Authentication
* Realtime feeds with nes and rethinkdb
* Logging
* Validation with joi
* Automated Tests with lab and code – setup complete
* CI with travis
* Server composition with glue
* Poop for uncaught exceptions
* Documentation with lout and swagger
* Server-side caching with catbox
* File upload
* CI with travis
* Release management with semantic release
```

### Setting up npm locally:

Setting up npm locally:

* You need to run the following:
  `> npm set save-exact=true`
  `> npm set init-author-name 'Teddy Odhiambo'`
  `> npm set init-author-email 'tedb19@gmail.com'`
  `> npm set init-author-url 'https://teddyodhiambo.com'`

- Verify the configuration by running:

  `> cat ~/.npmrc`

- Run the following to enter your npm account details. These will be used to create your auth token in npmrc, to enable you publish to npmjs.com:
  `> npm adduser`
