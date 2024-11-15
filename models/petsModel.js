import dbClient from '../config/dbClient.js';

class petModel {
    async create(pet) {
        const colPets = dbClient.db.collection('pets');
        return await colPets.insertOne(pet)

    }
}

export default new petModel; 