import {Router} from 'express';
import {registerUser, logoutUser, getUser, loginUser} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logoutUser);
authRouter.get("/get-me", getUser);

export default authRouter;