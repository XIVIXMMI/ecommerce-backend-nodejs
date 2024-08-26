const app = require("./src/app");

const PORT = process.env.PORT || 3055;

const server = app.listen( PORT, () => {
    console.log(`Web-service e-commerce start with port ${PORT}`);
} );

process.on('SIGNIN', () => {
    server.close( () => console.log(`Web-service e-commerce closing...`))
    //notify.send(`closing...`)
});
