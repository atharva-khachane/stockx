require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;



const app = express();





app.listen(PORT,()=>{
    console.log("App Started at port 3002");
    mongoose.connect(uri);
    console.log("MongoDB connected");
});