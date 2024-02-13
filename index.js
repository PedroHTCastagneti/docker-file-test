const express = require("express");
const server = express();

server.get("/usuario", (req, res) => {
  console.log("pedro");
  if(res.statusCode=200){
   console.log("certo");
  }
   return res.json({get: "Foi" });
});

server.put("/put", (req, res) => {
  return res.json({ put: "Certo" });
});

server.post("/post", (req, res) => {
  return res.json({ post: "Valido" });
});

server.patch("/patch", (req, res) =>{
  return res.json({Patch: "funcionou"});
})

server.delete("/delete", (req, res) => {
  return res.json({delet: "deu" });
});

server.listen(3000, () => {
  console.log("Servidor esta funcionando");
});
