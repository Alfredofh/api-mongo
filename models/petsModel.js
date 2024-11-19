import mongoose from 'mongoose';
import Pet from '../schema/petSchema.js';

class petModel {
    async create(pet) {
        return await Pet.create(pet);
    }
    async update(id, pet) {
        return await Pet.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) });
    }
    async delete(id) {
        return await Pet.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }
    async getAll() {
        return await Pet.find();
    }
    async getOne(id) {
        return await Pet.findById(id);
    }
}

export default new petModel; 