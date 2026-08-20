import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required to be added in blacklist"]
    }
}, { timestamps: true });

const blackListModel = mongoose.model("Blacklist", blacklistSchema);

export default blackListModel;