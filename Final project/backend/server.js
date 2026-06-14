const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const courseroutes = require('./routes/courseroutes');


dotenv.config();
const app = express();
connectdb();
app.use(cors());
app.use(express.json());
app.use("/api/courses", courseroutes);
app.get('/',(req,res)=>{
    res.send("api is working");
});
const port = process.env.port;

app.listen(port,()=>{
    console.log("server is running port 5500");
});