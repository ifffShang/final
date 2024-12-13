import express from 'express'
import postControllers from '../controllers/post.controller.js';

const router = express.Router();


const { createPost, deletePost, updatePost,getAllPosts, getPost} = postControllers;

router.post("/", createPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)
router.get("/", getAllPosts)
router.get("/:id", getPost)
export default router;