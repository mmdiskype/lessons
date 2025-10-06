import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/Users.js';
import avarouter from './routes/ApiAvailble.js';
import storeRouter from './routes/localstorge.js';


const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use('/users', router);
app.use('/ava', avarouter);
app.use('/keys', storeRouter);



app.get('/', (req, res) => {
    console.log('its started');
    res.send('hello from the api');

})

app.listen (port, () => {
    console.log(`server running on port : http://localhost:${port}`)
})


// 👇️ If you use CommonJS
// const fs = require('fs')
// try {
//   fs.writeFileSync(fileName, 'bobbyhadz.commmm');
//   console.log('Data written to file');
// } catch (err) {
//   console.log(err.message);
// }
