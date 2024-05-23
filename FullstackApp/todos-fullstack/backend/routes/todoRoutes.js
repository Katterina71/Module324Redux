import express from 'express'
import todoController from '../controllers/todoController';

const router = express.Router(); 

router.get('/api/todos', todoController)

export default router
