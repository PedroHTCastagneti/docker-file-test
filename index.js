const express = require("express");
const server = express();

server.get("/usuario", (req, res) => {
  console.log("pedro");
  if(res.statusCode=200){
   console.log("certo");
  }
   return res.json({ usuario: "Pedro" });
});
server.delete("/delete", (req, res) => {
  return res.json({ usuario: "Pedro" });
});

server.post("/post", (req, res) => {
  return res.json({ post: "Valido" });
});

server.patch("/patch", (req, res) =>{
  return res.write("Talvez funcione");
})
server.listen(3000, () => {
  console.log("Servidor esta funcionando");
});
