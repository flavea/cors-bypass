# cors-bypass

Simple app for testing apis with CORS.

Rename `.env.template` to `.env` and set your token to limit access. To limit url, update `src/server.js`

Run in development mode:

```npm run dev```

Run in production mode:

```npm run start```

Example of use using axios:

```javascript
import axios from 'axios'

const options = {
    method: 'POST',
    url: 'http://localhost:8080/proxy',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        method: 'POST',
        url: 'https://example.com/login/',
        token: token,
        data: JSON.stringify({
            username: 'ilma@fabelio.com',
            password: 'fab12345',
        })
    }
}


return axios(options)
    .then(response => response)
    .catch(err => err)
```