import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true,
        enum: ["dog", "cat", "bird", "fish", "reptile"],
    },
    race: {
        type: String,
    },
    age: {
        type: Number,
        min: [0, "age cannot be negative"]
    },
    adopted: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String
    },
}, { timestamps: true }
);

export default mongoose.model('pets', petSchema); 