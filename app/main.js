const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const { APP_PORT } = process.env;
const port = process.env.APP_PORT || APP_PORT;

server.listen(port, () => console.log(`App Running On http://localhost:${port}`));
