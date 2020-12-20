require("dotenv").config();
const express=require('express');
const imageSearchRouter=require("./src/router/imagesearch");
const historyRouter=require('./src/router/history');
const cors=require('cors');
const conn=require('./src/config/db');

const app=express();
app.use(cors());
conn
.then(()=>{
    console.log('connected to mongodb')
    app.use(express.static('build'));
    
    app.use('/api/imagesearch',imageSearchRouter);
    app.use('/api/latest/imagesearch',historyRouter);
    
    app.listen(process.env.PORT)
    .on('listening',()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
    .on('error',(err)=>{
        console.log('error',err);
    })
})
.catch((err)=>{
    console.log('error',err);
})

