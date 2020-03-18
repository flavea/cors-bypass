'use strict'
require('dotenv').config()
const Hapi = require('@hapi/hapi')
const proxyHandler = require('./routes/proxy')

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 8080,
        routes: {
            cors: {
                origin: ['*'],
                headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'Accept-language', 'Redirect'],
                exposedHeaders: ['Accept'],
                additionalExposedHeaders: ['Accept'],
                maxAge: 60,
                credentials: true,
            },
        },
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
