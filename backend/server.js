require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const router   = require('./routes/web')
const cors     = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// router

app.use('/api/data', router)



//connect to database
mongoose.connect(process.env.MONGODB)
        .then(()=>{
            app.listen(process.env.PORT, ()=> {
                console.log('connected')
            })
        })
        .catch((error)=>{
            console.log(error)
        })



