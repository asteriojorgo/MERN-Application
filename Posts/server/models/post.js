// import mongoose since it is being used
const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title required'],
    },
    content: {
        type: String,
        required: [true, 'content field required'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
