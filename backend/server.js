require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const shoppingListRouter = require('./routes/shoppingList');
const productsRouter = require('./routes/products');
const analyticsRouter = require('./routes/analytics');



//express app
const app = express()

//middlewa
// app.use(express.json())
// app.use((req, res, next)=> {
//     console.log(req.path, req.method)
//     next()
// })

app.use(cors());  // Dodano
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/shoppingList' ,shoppingListRouter)
app.use('/api/products', productsRouter)
app.use('/api/analytics', analyticsRouter)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listeneing on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


