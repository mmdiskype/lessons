import express from 'express';
import bodyParser from 'body-parser';

const avarouter = express.Router();
let availableity = true;
const port = 8080;
avarouter.use(bodyParser.json());

function ava () {
    if (availableity === true) return 200;
    if (availableity === false) return 503;
}

avarouter.get('/', (req, res) => {
    res.send(ava());
})

export default avarouter;
