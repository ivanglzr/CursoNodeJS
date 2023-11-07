const http = require("node:http");
const { findAvailablePort } = require("./9.free-port");

const PORT = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request");
  res.end("Hola");
});

findAvailablePort(PORT).then((port) => {
  server.listen(port, () => {
    console.log(
      `Escuchando en el puerto http://localhost:${server.address().port}`
    );
  });
});
