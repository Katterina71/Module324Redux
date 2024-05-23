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
