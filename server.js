'use strict';
const app = require('./app');
const debug = require('debug')('users');
const http = require('http');
// const environment = require('./config/environment');
// debug('DB connected - ', environment);
/**
 * Get port from environment and store in Express.
 */
let port = process.env.PORT || '4001';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */  
server.listen(port);
server.on('listening', onListening);
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  console.log('Listening on : aqui',port);
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
};
