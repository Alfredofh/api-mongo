import express from 'express';
const route = express.Router();
import petsController from '../controllers/petsController.js';

route.post('/', petsController.create);
route.get('/', petsController.getAll);
route.get('/:id', petsController.getOne);
route.put('/:id', petsController.update);
route.delete('/:id', petsController.delete);


export default route; 