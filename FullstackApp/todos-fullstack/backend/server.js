import express from 'express'
import  'dotenv/config'

import mongoConfig from './config.js'
import Todo from './models/TodoModel.js'

const app = express();
const PORT = 8080

app.get('/', (req,res) => {
 res.json('Hello! (from Server)')
})


app.get('/api/todos', async (req,res)=>{
    try {
       const todos = await Todo.find()
       res.status(200)
          .json(todos)

        console.log('Success')
    } catch (error) {
        console.error('No data fetch', error)
        res.status(400).json(error)
    }
})

app.listen(PORT, ()=> {
    console.log('Listening on port' + PORT)
    mongoConfig()
})
