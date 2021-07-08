const mongoose = require('mongoose')
require('dotenv').config()

function connetDB(){
    // DATABSE CONNEECTION 

    mongoose.connect(process.env.MONGO_CONNECTION_URL,{
        useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true
    })
    const connection = mongoose.connection;

    connection.once('open',()=>{
        console.log('Database Connected')
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = connetDB;