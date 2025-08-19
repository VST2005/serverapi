const jwt = require('jsonwebtoken');
const UserModel = require('../model/user')



const checkAuth =async (req, res,next)=>{
    // console.log("hello auth")
    const token = req.cookies.token;
    console.log(token)
    if(!token) return res.status(401).json({message: "Unauthorized" });

    try{
        const decoded = jwt.verify(token,'vinayt@1234');
        console.log(decoded)

            //fetch full user from DB
            const user = await UserModel.findById(decoded.ID);
            if(!user) return res.status(401).json({ message: "user not found" });

            req.user = user; // full user now available including email
            //console.log(req.user)
            next();
    }
    
            catch(err){
                console.log(err)
                res.status(401).json({
                    message:"Invalid user !!"
                })
            
            

        
    }
    }

    module.exports =checkAuth

