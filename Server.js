const express = require("express")
const app = express();
const userrouter = require("./Router/user-router")
const jobrouter = require("./Router/job-router")
const application = require("./Router/application_router")
const connectDb = require("./utils/db.js")
app.use("/route",userrouter, jobrouter,application);



  const PORT = 5000;
 



connectDb().then(()=>{
    
app.listen(PORT,()=>{
    console.log(`server connection seccessfully at port ${PORT}`)
});
});



app.get("/",(req,res)=>{

    res.status(200).send("welcome by Server");

});


// app.get("/jobpost", async (req,res)=>{

    // let  samplejobpost = new jobpost({
    //     Name:"deepak",
    //     CompanyName :"tcs",
    //     EmailId:"tcs@gmail.com",
    //     MobileNo: 12345,
    //     YourDesignation:"hr", 
    //     Position:"software eng",
    //      Candidates:2,
    // }) 
//     await samplejobpost.save();
//     console.log("sample saved")

//     res.send("sample saved")

// });

// app.get("/delet", async (req,res)=>{

//     await jobpost.deleteMany({})
//     res.send("delet succesfully")

// });


