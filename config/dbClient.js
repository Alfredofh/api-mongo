import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {
    constructor() {
        this.connect();
    }
    async connect() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/adoption?retryWrites=true&w=majority`
        await mongoose.connect(queryString)
        this.connect();
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("Database conection closed");
        } catch (e) {
            console.log(e);

        }
    }
}

export default new dbClient; 