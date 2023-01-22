require('dotenv').config()
const express = require('express')

const workoutRoutes = require('./routes/workouts')

const mongoose = require('mongoose')


//express app
const app = express()


//middleware
app.use(express.json())                     //this catch any data that comes to the server from body and pass to the req handler 

app.use((req, res, next) => {               //when you make a get/post/delete/patch request it will show on console
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts', workoutRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {                           //fires only connected to the DB

        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port 4000!')
        })

    })
    .catch((error) => {                     //catches any errors
        console.log(error)
    })



