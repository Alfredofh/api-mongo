import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js';

class petModel {
    async create(pet) {
        const colPets = dbClient.db.collection('pets');
        return await colPets.insertOne(pet)
    }

    async getAll() {
        const colPets = dbClient.db.collection('pets');
        return await colPets.find().toArray();
    }

    async getOne(id) {
        const colPets = dbClient.db.collection('pets');
        return await colPets.findOne({ id: new ObjectId(id) });
    }

    async update(id, pet) {
        const colPets = dbClient.db.collection('pets');
        return await colPets.updateOne({ _id: new ObjectId(id) }, { $set: pet });
    }

    async delete(id) {
        const colPets = dbClient.db.collection('pets');
        return await colPets.deleteOne({ _id: new ObjectId(id) });
    }
}

export default new petModel; 