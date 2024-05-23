import express from 'express'
import {getTodos, createTodo, deleteTodo} from '../controllers/todoController.js';

const router = express.Router(); 

router.get('/', getTodos)
    .post('/', createTodo)
    .delete('/:id', deleteTodo)

export default router
