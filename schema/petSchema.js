import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    race: {
        type: String,
    },
    age: {
        type: Number
    },
    adopted: {
        type: Boolean,
    },
    description: {
        type: String
    },
}, { timestamps: true }
);

export default mongoose.model('pets', petSchema); 