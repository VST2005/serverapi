const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDb = require("./db/connectdb")
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require('cors');


require("dotenv").config()


//token get cookie
app.use(cookieParser())


//image upload

app.use(fileUpload({
    useTempFiles : true,

}));


//for frontend
app.use(
    cors({
        origin:'http://localhost:5173', //your frontend domain
        credentials :true, // allow credentials(cookies)
    })
);




//connectDB
connectDb()

app.use(express.json())











app.use('/api', web) //localhost:3000/api/
app.listen(process.env.PORT,console.log("server started successfully :) "))
