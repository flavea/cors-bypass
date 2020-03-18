'use strict'
require('dotenv').config()
const Hapi = require('@hapi/hapi')
const proxyHandler = require('./routes/proxy')

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Ilma\'s app to bypass CORS'
        },
    })

    server.route({
        method: 'POST',
        path: '/proxy',
        handler: proxyHandler.proxyHandler,
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

    console.log(err)
    process.exit(1)
})

init()
