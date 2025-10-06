import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
let users = []

router.get('/', (req, res) => {
    res.send(users);
    console.log(users)
})

router.post('/', (req, res) => {
    const user = req.body;
    const userwithId = { ...user , id: uuidv4(), status: "available", logged: "out"};
    users.push(userwithId);
    console.log('route reached');
    res.send(`user with the name: ${user.username} created`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const founduser = users.find((user) => user.id === id);
    res.send(founduser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
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