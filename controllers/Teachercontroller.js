const TeacherModel = require("../model/teacher")


class TeacherController{
    static display = async (req, res) => {
        try{
            res.send("hello display")
        }
        catch(error){
            console.log(error)
        }
    }
    static create = async (req, res) => {
        try{
            const{name,email,Password} = req.body
            const data = await TeacherModel.create({
                name,
                email,
                Password
            });
            res.json(data)
            console.log(req.body)
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = TeacherController;