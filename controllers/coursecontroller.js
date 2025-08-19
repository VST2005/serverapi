const coursemodel = require('../model/course')

const cloudinary = require('cloudinary')

 cloudinary.config({ 
        cloud_name: 'dfnyjfcc0', 
        api_key: '463577133674534', 
        api_secret: '4NPl_nqqDgUw4wjuz--G37DSqHA' // Click 'View API Keys' above to copy your API secret
    });

class coursecontroller{

    static display = async (req, res) => {
        try{
            const data = await coursemodel.find()
            res.json(data)
        }
        catch(error){
            console.log(error)
        }
    }
    static create = async (req, res) => {
        try{
            // console.log(req.files)
            const{title,description,price,duration} = req.body
            const file = req.files.image
            // console.log(file)
            const imageUpload = await cloudinary.uploader.upload(file.tempFilePath,{
                folder:'PnInfosys_slider'

            })
            // console.log(imageupload)
            const data = await coursemodel.create({
                title,
                description,
                price,
                duration,
                image:{
                    public_id:imageUpload.public_id,
                    url:imageUpload.secure_url
                }
            })
            res.json(data)
        }
        catch(error){
            console.log(error)
        }
    }
     static view = async (req, res) => {
        try{
            const id = req.params.id
            const data = await coursemodel.findById(id)
            res.json(data)
        }
        catch(error){
            console.log(error)
        }
    }
    static update = async (req, res) => {
        try{
            const id = req.params.id
            console.log(id)
            const {name} = req.body
            const data = await coursemodel.findByIdAndUpdate(id,{
                name,
            })
            res.json(data)
        }
        catch(error){
            console.log(error)
        }
    }
    static delete = async (req, res) => {
        try{
            const id = req.params.id
            // console.log(id)
            const data = await coursemodel.findByIdAndDelete(id)
                res.json({
                    msg:"delete success"
                })
        }
        catch(error){
            console.log(error)
        }
    }

}

module.exports = coursecontroller;
