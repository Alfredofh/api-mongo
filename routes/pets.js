import express from 'express';
const route = express.Router();
import petsController from '../controllers/pets.js';

route.post('/', petsController.create);
route.get('/', petsController.getAll);
route.get('/:id', petsController.getOne);
route.put('/:id', petsController.update);
route.delete('/', petsController.delete);


export default route; 