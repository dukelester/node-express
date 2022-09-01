import { Router } from 'express';
import { signInController, signInPostController, signUpController, 
    signUpPostController ,logout } from '../controllers/AuthControllers.js';

 const router = Router();

router.get('/signup', signUpController);
router.post('/signup',signUpPostController);
router.get('/login',signInController);
router.post('/login',signInPostController);
router.get('/logout',logout)

export default router;

