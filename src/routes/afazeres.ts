import { Router } from "express";
import { criaAfazeres } from "../controllers/afazeres";

const router = Router();

router.post('/', criaAfazeres);
router.get('/');
router.patch('/:id');
router.delete('/:id');

export default router;