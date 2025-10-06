import express from 'express';
import bodyParser from 'body-parser';
import storage from 'node-persist';

const storeRouter = express.Router();
const port = 8080;
storeRouter.use(bodyParser.json());

storeRouter.get('/', async(req, res) => {

});

export default storeRouter;

