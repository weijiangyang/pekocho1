const http = require('http');
const { path } = require('./app');
const app = require('./app');
const fs = require("fs");





const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};
var https = require('https');
const server = http.createServer(app);
// var key = fs.readFileSync(__dirname + '/https/example.com+5-key.pem');
// var cert = fs.readFileSync(__dirname + '/https/example.com+5.pem');
// var options = {
//   key: key,
//   cert: cert
// };

// var server = https.createServer(options, app);




server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});


server.listen(port);

