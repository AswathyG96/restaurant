
//import json server

const jsonServer = require('json-server')

//create a json server app

const server = jsonServer.create()

//set up for db.json

const router = jsonServer.router("db.json")

//returns middleware used by JSON server
const middleware = jsonServer.defaults()

//set up port

const port = process.env.PORT || 4000

//use router , middleware in server

server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log(`json server starts at port number ${port}`);
})