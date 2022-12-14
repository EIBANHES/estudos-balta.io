//importação de modulos
const app = require("../src/app");
const http = require("http");
const debug = require("debug")("nodestr:server");

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

//Criando um servidor
const server = http.createServer(app);

//Ouvir tudo que chega na porta 300
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("A API esta rodando na porta: " + port);

//Função para normalizar a porta
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
