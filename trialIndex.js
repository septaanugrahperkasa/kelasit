const express = require("express");
const path = require("path");


const app = express();
/*
app.use(express.static(path.join(__dirname+'/assets/2017/Kelas IT')));
app.use(express.static(path.join(__dirname+"/assets/images/2021")));
app.use(express.static(path.join(__dirname+"/assets/videos")));
app.use(express.static(path.join(__dirname+'/assets/2017/page not found')));
*/
const rute = path.join(__dirname,"../");
//app.use(express.static(rute));
        //http://localhost:3000/2021/image%20icons/education.png
app.use("/2021",express.static(rute+"assets/images/2021"));



app.get("/",function(req,res){
        res.sendFile(rute+"main page/Kelas IT/index.html");
});
/*
app.use("/",function(req,res){
        res.sendFile(__dirname+"/work/all pages/page not found/page not found.html");
});
*/

app.listen(3000,()=>{
        console.log('Server is running...');
});
