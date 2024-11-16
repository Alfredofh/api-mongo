import Pet from '../schema/petSchema.js';

class petModel {
    async create(pet) {
        return await Pet.create(pet);
    }
    async update(id, pet) {
        return await Pet.findByIdAndUpdate(id, pet, { new: true });
    }
    async delete(id) {
        return await Pet.findByIdAndDelete(id);
    }
    async getAll() {
        return await Pet.find();
    }
    async getOne(id) {
        return await Pet.findById(id);
    }
}

export default new petModel; 