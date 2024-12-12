import { response } from "express";
import Post from "../models/post.model.js";

const createPost = async (req, res) => {
    try {
        const{text} = req.body;
        // const userId = req.user;

        const newPost = new Post({
            // user: userId,
            text,
            // img
        })
        await newPost.save();
        res.status(201).json(newPost)


    }catch(error){
        res.status(500).json({ error: "internal server error"});
        console.log("Error in creatPost controller", error)

    }

}

const deletePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({message: " Post deleted successfully"})
    }catch{
        res.status(500).json({error: " internal server error"})
    }

}

const getAllPosts = async (req, res) => {
    try{
        const post = await Post.find().sort({createdAt: -1})
        res.status(200).json(post)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"get Internal server error"})

    }
}

const getPost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"get Internal server error"})

    }
}

const updatePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({ error: 'Post not found' }); 
          }
        post.text = req.body.text
        await post.save()
        
        res.status(200).json({msg:"update success"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"update Internal server error"})
    }
}

export default { createPost, deletePost,  getAllPosts,updatePost, getPost};