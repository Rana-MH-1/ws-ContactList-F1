const User2 = require('../Models/UserSchema')

const AddUser = async(req,res)=>{
    try {
      //method1 using create()
     // const NewUser = await User2.create(req.body)
     // res.json(NewUser)
     //method 2 
     const NewUser = new User2(req.body) 
     const AddedUser = await NewUser.save()
     res.json(AddedUser)
    } catch (err) {
     console.log(err);
    }
 }

const getAllUsers = async(req,res)=>{
    try {
     const users = await User2.find({})
     res.json(users)
    } catch (err) {
     console.log(err);
    }
 }

 const UpdateUsersData = async(req,res)=>{
    try {
        const UpdatedUser = await User2.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(UpdatedUser)
    } catch (err) {
        console.log(err);
    }
}

const DeleteDataUser = async(req,res)=>{
    try {
        const DeletedUSer = await User2.findByIdAndDelete(req.params.idd)
        res.json({DeletedUSer, msg:'User has been deleted Successfully'})
    } catch (err) {
        console.log(err);
    }
}

 module.exports = {AddUser,getAllUsers,UpdateUsersData,DeleteDataUser}