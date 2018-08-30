import express from 'express';
import productsRoute from './products';
import stopsRoute from './stops'

const router = express.Router();

router.use('/stops',stopsRoute);
router.use('/products',productsRoute);
router.get('/',(req,res)=> res.send('Hello World'));

export default router;