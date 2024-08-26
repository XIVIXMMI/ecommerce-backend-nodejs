'use strict'

// Level 0 

// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: localhost,
//         port: 27017,
//         name: db
//     }
// }

// Level 1

const development = {
    app: {
        port: process.env.DEV_APP_PORT 
    },
    db: {
        host: process.env.DEV_DB_HOST ,
        port: process.env.DEV_DB_PORT ,
        name: process.env.DEV_DB_NAME 
    }
}

const product = {
    app: {
        port: process.env.PRO_APP_PORT 
    },
    db: {
        host: process.env.PRO_DB_HOST ,
        port: process.env.PRO_DB_PORT ,
        name: process.env.PRO_DB_NAME
    }
}

const config = { development, product}
const env = process.env.NODE_ENV_DEV

console.log(config[env], env);

module.exports = config[env]