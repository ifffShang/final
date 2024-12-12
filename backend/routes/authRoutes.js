import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { register, login, logout, test, getProfile} from '../controllers/authController.js'
import passport from '../config/passport.js'

const router = express.Router();


router.get('/', test);

// API: register
router.post("/register", register);

// API: login
router.post("/login", login);

// API: logout
router.post("/logout", logout);

// API: profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(req.user);  
});

export default router;