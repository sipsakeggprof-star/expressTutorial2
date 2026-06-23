const express = require('express')

const app = express()

app.use(express.static('public')) /* This is how we serve static files */

app.use((req,res,next) =>{
    console.log("This is the first middleware")
    next() /* This is how we move to the next middleware */
}) /* app.use is how we write the middleware */

app.use((req,res,next) =>{
    console.log("This is the second middleware")
    next()
})


app.get('/',(req,res) => {
    res.status(200).json({
        message:'Good job'
    })
})

app.listen(3000,() => {
    console.log("Server is running on PORT:3000")
})