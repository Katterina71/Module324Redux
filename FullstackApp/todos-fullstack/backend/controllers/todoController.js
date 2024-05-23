import Todo from '../models/TodoModel.js'

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
        console.log('Success')
     } catch (error) {
         console.error('No data fetch', error)
         res.status(400).json(error)
     }
}


 export const createTodo = async(req,res) => {
    try {
        console.log(req.body)   
        const todo = await Todo.create(req.body) // req has to match with schema. return create id in mongoDb
        res.status(200).json(todo)
    } catch (error) {
        console.error(error.message)
        res.status(400).json(error)
    }
}

// /api/todos/9889987689

export const deleteTodo = async (req,res) => {
    try {
       console.log(req.params.id)
       await Todo.findByIdAndDelete(req.params.id) 
       res.status(200).json({message: 'successfully deleted'})
    
    } catch (error) {
        console.error(error.message)
        res.status(400).json(error)
        
    }
}
