import express from 'express';
import { deleteUser, getUser, getUsers, postUser, putUser } from '../API/userAPI.js';
const route = express.Router();

route.get('/', (req, res) => {
    res.send('Hello World!');
  });

route.post('/api/postUser', postUser);
route.get('/api/getUser/:id', getUser);
route.get('/api/getUsers', getUsers);
route.put('/api/putUser/:id', putUser);
route.delete('/api/deleteUser/:id', deleteUser);

export default route;