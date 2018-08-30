import express from 'express';
import SpTransController from '../controllers/sptrans';

const router = express.Router();
const spTransController = new SpTransController();

router.get('/:filter', (req, res) => spTransController.getStop(req.params.filter, res));

export default router;