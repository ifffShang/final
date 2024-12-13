import express from 'express'
import postControllers from '../controllers/post.controller.js';
import passport from 'passport';

const router = express.Router();


const { createPost, deletePost, updatePost,getAllPosts, getPost} = postControllers;

// create post
router.post("/", passport.authenticate('jwt', { session: false }), createPost)

router.delete("/:id", deletePost)
router.put("/:id", updatePost)
router.get("/", getAllPosts)
router.get("/:id", getPost)
export default router;