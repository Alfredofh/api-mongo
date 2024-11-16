import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {
    constructor() {
        this.connect();
    }
    async connect() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adoptions`
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