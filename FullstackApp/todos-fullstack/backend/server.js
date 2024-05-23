import express from 'express'

import cors from 'cors' // connect backend and frontend
import  'dotenv/config'

import mongoConfig from './config.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = 8080



//middleware
app.use(cors()) // connect backend and frontend
app.use(express.json()) //give access to request body
app.use('/api/todos', todoRoutes) //url matches with this route

app.get('/', (req,res) => {
 res.json('Hello! (from Server)')
})

app.listen(PORT, ()=> {
    console.log('Listening on port' + PORT)
    mongoConfig()
})
