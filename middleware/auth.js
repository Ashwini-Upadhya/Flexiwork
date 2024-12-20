
const jwt = require("jsonwebtoken");

const ensureauthenticated=(req,res,next)=>{
   const token = req.headers['authorization'] ;
 
   if (!token){
    return res.status(403).json({massage:"unauthorized request,jwt token is required"})
   }
   try {
      
    const decoded= jwt.verify(token,"abcd");
 
    req.user= decoded;
    console.log(req.user)

    next();

    
   } catch (error) {
    return res.status(403).json({message:"unauthrized "})
    
   }
}
module.exports= ensureauthenticated;