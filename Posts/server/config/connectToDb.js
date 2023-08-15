const mongoose = require('mongoose')
require("dotenv").config();

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('connected to database')
    } catch (err){
        console.log(err)
    }
    
}

module.exports = connectToDb;