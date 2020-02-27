const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')
const cors = require('cors')
const http = require('http')
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);
setupWebSocket(server);

mongoose.connect('mongodb://rogerio:Scarnox4@cluster0-shard-00-00-fp3mj.mongodb.net:27017,cluster0-shard-00-01-fp3mj.mongodb.net:27017,cluster0-shard-00-02-fp3mj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);