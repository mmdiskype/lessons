import express from 'express';
import storage from 'node-persist';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
let users = [];
let allusers3 = [];
storage.initSync({
    dir: 'userData',
});
async function allusers2() {
    await storage.forEach(async function(alluser1) {
	    allusers3.push(alluser1);
    });
    return await allusers3;
}

router.get('/', async(req, res) => {
    allusers2();
    res.send(allusers3);
    allusers3 = [];
})

router.post('/', async(req, res) => {
    const user = req.body;
    const userwithId = { ...user , id: uuidv4(), status: "available", logged: "out"};
    storage.setItem(userwithId.username, userwithId);
    console.log('route reached');

    res.send(`user with the name: ${user.username} created`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const founduser = users.find((user) => user.id === id);
    res.send(founduser);
})

async function deleteuser (id) {
    await storage.forEach(async function(alluser1) {
	    if (alluser1.key === `"${id}"`) {
            console.log(alluser1.key)
            await storage.removeItem(`"${alluser1.key}"`);
        }
    });
    
}

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    console.log(id);
    deleteuser (id);
    res.send(`user with the id: ${id} was deleted`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { username, passeord, status} = req.body;

    const user = users.find((user) => user.id === id);

    if(username) user.username = username;
    if(passeord) user.passeord = passeord;
    if(status) user.status = status;

    res.send(`user with the id: ${id} has been updated`);

})

export default router;

