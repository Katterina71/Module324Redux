import express from 'express'
import  'dotenv/config'

import mongoConfig from './config.js'

const app = express();
const PORT = 8080

app.get('/', (req,res) => {
 res.json('Hello! (from Server)')
})

app.listen(PORT, ()=> {
    console.log('Listening on port' + PORT)
    mongoConfig()
})
