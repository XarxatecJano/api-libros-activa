import { Router } from "express";
import {pool} from '../config/db.js';
import { findBooks, findBookById } from "../controllers/bookController.js";


const router = new Router();

router.get('/', findBooks);
router.get('/:id', findBookById);

export default router;