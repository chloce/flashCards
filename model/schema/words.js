import mongoose from "mongoose";

const wordsSchema = new mongoose.Schema({
    word: String,
    meaning: String,
    createdDate: Date,
    done: Boolean
});

const words = mongoose.model("words", wordsSchema);

export default words;
