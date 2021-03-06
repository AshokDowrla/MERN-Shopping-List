const express = require('express')
const app = express()

const morgan = require('morgan')

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const db = require('./config/keys').mongoURI
const itemRouter = require('./api/routes/items')

mongoose.connect(db,


    {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }

)

app.use(morgan('dev'))

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')

        return res.status(200).json({})
    }

    next()
})

///routes

app.use('/items', itemRouter)

// error cathcers
app.use((req, res, next) => {
    const error = new Error('Not Found')

    error.status = 404

    next(error)


})

app.use((error, req, res, next) => {
    res.status = error.status || 500

    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app