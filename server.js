const express = require('express') /* This is how we import the express module */

const app = express() /* This is how we create an express application */

const userRouters = require('./routes/userRoutes')



app.use(express.static('public').json()) /* This is how we serve static files */

app.use('/api/v1/users',userRouters) /* This is how we use the userRouters */

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