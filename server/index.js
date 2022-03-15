import express from 'express';
import mongoose from 'mongoose';
import { configureServer, components } from './config/index.js';
import { configureRoutes } from './api/index.js';

const app = express();
configureServer(app);
configureRoutes(app);

console.log(`Connection to mongoDb on uri: ${components.mongo.uri}`);
mongoose.connect(components.mongo.uri);
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

/* const monSchema = new mongoose.Schema({
    nom: "Mongo",
    status: "Work"
})
const monModel = mongoose.model('monModel', monSchema);

app.get('/', (req, resp) => {
        resp.send(monModel.findOne({}))
}) */


app.listen(components.app.port, () => console.log(`Example app listening on ${components.app.port}!`));
