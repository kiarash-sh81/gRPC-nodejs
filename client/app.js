const express = require('express');
const { AllRoutes } = require('./router/index.routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(AllRoutes);
app.listen(4000 , ()=>{
    console.log("client start in port 4000");
})