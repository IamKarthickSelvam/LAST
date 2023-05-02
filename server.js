const express = require("express")
const connectDb = require("./Config/dbConnection")
const errorHandler = require("./Middleware/errorHandler")
const dotenv = require("dotenv").config() 

connectDb()
const app = express()
const port = process.env.PORT || 1000

app.use(express.json())
app.use("/api/users", require("./Routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`)
})