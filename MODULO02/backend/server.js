const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.use(express.static("public"))

server.set("view engine","njk")

nunjucks.configure("views",{
  express:server
})

server.get("/", function(req,res){
  return res.render("about")
})
server.get("/posts", function(req, res){
  return res.render("posts")
})

server.listen(5001, function () {
  console.log("server is runner")
})