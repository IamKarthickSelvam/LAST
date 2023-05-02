const asyncHandler = require("express-async-handler")
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
//@desc Register a user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) =>{
    const {username, email, password} = req.body
    if (!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const existingUser = await User.findOne({email})
    if (existingUser){
        res.status(400)
        throw new Error("User already registered!")
    }

    // const hashedPassword = await bcrypt.hash(password, 10)
    // console.log("Hashed Password: ", hashedPassword)
    const user = await User.create({
        username,
        email,
        password,
        role: "new"
    })

    console.log(`User created: ${user}`)
    if(user){
        res.status(201).json({
            _id: user.id,
            _email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({message: "Register the user"})
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    if (!email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({email})
    // const allUsers = await User.find({})
    if (user && (password === user.password)){
        res.status(200).json({
            message: "Login successful!"
        })
    }
    else{
        res.status(400)
        throw new Error("email or password is not valid")
    }
})

// const loginUser = asyncHandler(async (req, res) => {
//     res.status(200).json({message: "Login"})
// })

module.exports = {registerUser, loginUser}