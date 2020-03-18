const rq = require('request-promise')

module.exports = {
    proxyHandler: async (request) => {
        if (request.payload.token && request.payload.token === process.env.token) {
            const options = request.payload

            try {
                const fetch = await rq(options)
                return {
                    statusCode: 200,
                    data: JSON.parse(fetch),
                }
            } catch (error) {
                return {
                    statusCode: 500,
                    data: error.message,
                }
            }
        } else {
            return {
                statusCode: 500,
                data: 'Wrong token.',
            }
        }
    },
}
