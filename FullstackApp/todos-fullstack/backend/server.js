import express from 'express'
import  'dotenv/config'

import mongoConfig from './config.js'
import Todo from './models/TodoModel.js'
import moduleName from 'module'

const app = express();
const PORT = 8080

app.get('/', (req,res) => {
 res.json('Hello! (from Server)')
})


app.get('/api/todos', async (req,res)=>{
   
})

app.listen(PORT, ()=> {
    console.log('Listening on port' + PORT)
    mongoConfig()
})
