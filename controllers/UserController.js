const UserModel = require('../model/user')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

class UserController{
    static register=async(req,res)=>{
        try{
            // console.log(req.body)
            const{name,email,password} = req.body
            const existingUser = await UserModel.findOne({email});
            if(existingUser){
                return res.status(400).json({
                    msg:"email already exist !! "
                });
        }
            const hasedPassword = await bcrypt.hash(password,10);
            const data = await UserModel.create({
                name,
                email,
                password:hasedPassword
            })
            res.json({
                data,
                msg:"user insert success"
            })
        }catch(error){
            console.log(error)
        }
    }

    static login =async(req,res)=>{
        try{
            const{email,password} = req.body;
            const user = await UserModel.findOne({email});
            if(!user){
                return res.status(400).json({
                    message:"invaild credentials !!"
                })
            }
            const isMatch = await bcrypt.compare(password,user.password);
            console.log(isMatch)
            if(!isMatch){
                return res.status(400).json({
                    message:"Invalid credentials !!"
                });
            }

            //token create 
                var token = jwt.sign(
                    {ID: user._id},
                    process.env.JWT_SECRET,
                    {
                        expiresIn:"2d"
                    }
                );


            //console.log(token)
            
            //send token in HTTP -Only cookie
            res.cookie("token", token, {
                httpOnly: true,
            })
            

            res 
            .status(200)
            .json({
                message:"login successful",
                role:user.role,
                name:user.name,
                email:user.email
            });
            // console.log(req.body)
        }catch(error){
            console.log(error)
        }
    }

    static profile = async(req,res)=>{

    
        try{
            console.log("hello profile")
        }catch (error) {
                console.log(error)
        }
        
       
    }
    static logOut = async (req, res) => {
        try {
            res.clearCookie("token")
            res.status(200).json({message:"logout successfully"})
            
        } catch (error) {
            console.log(error)
        } 
    }

    
}

module.exports=UserController