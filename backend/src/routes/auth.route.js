import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Login Route');
});

router.get('/register', (req, res) => {
  res.send('Register Route');
});

export default router;