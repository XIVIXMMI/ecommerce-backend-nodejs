const app = require("./src/app");

const PORT = 3055;

const server = app.listen( 3055, () => {
    console.log(`Web-service e-commerce start with port ${PORT}`);
} );

process.on('SIGNIN', () => {
    server.close( () => console.log(`Web-service e-commerce closing...`))
    //notify.send(`closing...`)
});