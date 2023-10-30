const express=require('express');
const cookieParser=require('cookie-parser');




const app=express();


app.use(cookieParser());

// set cookie

app.get('/set-cookie',(req,res)=>{
    res.cookie('cookieName','cookieValue');
    res.send("Cookie is set");
})


app.get('/get-cookie',(req,res)=>{
    const setCookie=req.cookies.cookieName;
    if(setCookie){
        res.send(`Cookie value is ${setCookie}`);
    }else{
        res.send("Cookie not found");
    }
})

app.get('/delete-cookie',(req,res)=>{
    res.clearCookie('cookieName');
    res.send("Cookie cleared");
})





app.listen(5000,()=>{
    console.log("Server Connected");
})