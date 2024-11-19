import petModel from '../models/petsModel.js';


class petsController {
    constructor() {

    }

    async create(req, res) {
        try {
            const data = await petModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await petModel.update(id, req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await petModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res) {
        try {
            const data = await petModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await petModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new petsController; 