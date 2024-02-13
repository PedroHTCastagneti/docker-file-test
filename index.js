const express = require("express");
const server = express();

server.get("/usuario", (req, res) => {
  console.log("pedro");

  return res.json({ usuario: "Pedro" });
});
server.delete("/delete", (req, res) => {
  return res.json({ usuario: "Pedro" });
});
server.delete("/delete", (req, res) => {
  return res.json({ usuario: "Pedro" });
});

server.listen(3000, () => {
  console.log("Servidor esta funcionando");
});
