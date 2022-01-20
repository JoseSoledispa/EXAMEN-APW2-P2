const express = require('express');
const app = express();

const response = {
    data:[],
    services:"Computer Service 2",
    arquitecture:"Microservices 2"
};

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/pc",(req,res)=>{
    response.data.push("Teclado","Mouse", "Monitor");
    console.log(`Get pc maintenance data`)
    return res.send(response);
})


module.exports =  app;