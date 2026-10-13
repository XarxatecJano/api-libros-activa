import { Router } from "express";
import {pool} from '../model/db.js';
import { findBooks } from "../controllers/books/findBooks.js";
import { findBookById } from "../controllers/books/findBookbyId.js";


const router = new Router();

router.get('/', findBooks);
router.get('/:id', findBookById);

export default router;