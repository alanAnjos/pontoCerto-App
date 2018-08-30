import express from 'express';
import productsRoute from './products';
import stopsRoute from './stops'

const router = express.Router();

router.use('/stops',stopsRoute);
router.use('/products',productsRoute);

export default router;