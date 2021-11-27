
const liveServer = require('live-server');

const {PORT,OPEN} = process.env;


const controller = {
    host: 'localhost',
    port: PORT || 3000,
    open: OPEN || false,
}

liveServer.start(controller);



