import {Router} from 'express';
import {registerUser, logoutUser, getUser, loginUser} from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);
authRouter.get("/get-me", authMiddleware, getUser);

export default authRouter;