const mongoose = require("mongoose")
const LiveUrl = "mongodb+srv://vinay:vinay@cluster0.4xadkhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = async()=>{
    return mongoose.connect(process.env.LIVE_URL)

    .then(()=>{
        console.log("DataBase connected succesfully")
    })
    .catch((error) =>{
        console.log("error found try again ! ")
    });
};

module.exports = connectDb;