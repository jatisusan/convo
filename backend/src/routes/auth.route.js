import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', (req, res) => {
  res.send('Register Route');
});

router.get('/logout', signup);


export default router;