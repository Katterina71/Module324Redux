import mongoose from 'mongoose'
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    text: { type:String, required: true },
    completed: {type: Boolean, default: false},
    user: {type: String, required: true}
})

const Todo = mongoose.model('todos', todoSchema) // create model

export default Todo