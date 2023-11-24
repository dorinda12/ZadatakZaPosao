require('dotenv').config()

const express = require('express')

const shoppingListRouter = require('./routes/shoppingList');
const productsRouter = require('./routes/products');
const analyticsRouter = require('./routes/analytics');


//express app
const app = express()

//middlewa
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

app.use('/api/shoppingList' ,shoppingListRouter)
app.use('/api/products', productsRouter)
app.use('api/analytics', analyticsRouter)


app.listen(process.env.PORT, ()=>{
    console.log('listeneing on port', process.env.PORT)
})