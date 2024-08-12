const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hey Shravani this is Dynamic Website.")
})

app.get('/login',(req,res)=>{
    res.send("Hey this is login page.")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})