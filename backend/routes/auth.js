import express from 'express';
import { register, login, logout} from '../controllers/auth.js'

const router = express.Router();

// API: register
router.post("/register", register);

// API: login
router.post("/login", login);


// API: logout
router.post("/logout", logout);

export default router;