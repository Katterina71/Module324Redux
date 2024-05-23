import express from 'express'
import  'dotenv/config'

import mongoConfig from './config.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = 8080

//middleware
app.use('/api/todos', todoRoutes) //url matches with this route

app.get('/', (req,res) => {
 res.json('Hello! (from Server)')
})




app.listen(PORT, ()=> {
    console.log('Listening on port' + PORT)
    mongoConfig()
})
