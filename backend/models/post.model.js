import mongoose from "mongoose";
import UserModel from "./user.js"


const postSchema = new mongoose.Schema({
    owner: String,
    text:{
        type: String,
        maxlength: 500,
    },
        
}, {timestamps: true})


const Post = mongoose.model("Post", postSchema)

export default Post;