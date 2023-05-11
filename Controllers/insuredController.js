const asyncHandler = require("express-async-handler")
const Insured = require("../Models/userModel")

//@desc get all Insureds
//@route GET /api/insured
//@access private
const getInsureds = asyncHandler(async (req, res) => {
    const insured = await Insured.find({ user_id: req.user_id })
    res.status(200).json({insured})
})

//@desc create new Insured
//@route POST /api/insured
//@access private
const createInsured = asyncHandler(async (req, res) => {
    const {name, email, phone, type} = req.body
    if (!name || !email || !phone || !type ){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const insured = await Insured.create({
        name,
        country,
        type,
        user_id: req.user_id
    })
    res.status(200).json({insured})
})

//@desc Get a Insured
//@route POST /api/insured/:id
//@access private
const getInsured = asyncHandler(async (req, res) => {
    const insured = await Insured.findById(req.params.id)
    if(!insured){
        res.status(401)
        throw new Error("Contact not found")
    }
    res.status(200).json({insured})
})

//@desc update Insured
//@route PUT /api/insured/:id
//@access private
const updateInsured = asyncHandler(async (req, res) => {
    const insured = await Insured.findById(req.params.id)
    if (!insured){
        res.status(404)
        throw new Error("Insured not found")
    }

    if(insured.user_id != req.user.id){
        res.status(403)
        throw new Error("User doesn't have the permission to update this Insured")
    }

    const updatedInsured = await Insured.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json({updatedInsured})
})

//@desc Delete insured
//@route DELETE /api/insured/:id
//@access private
const deleteInsured = asyncHandler(async (req, res) => {
    const insured = await Insured.findById(req.params.id);
    if (!insured) {
      res.status(404);
      throw new Error("Insured not found");
    }
    if (insured.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User doesn't have the permission to delete this Insured");
    }
    await Insured.deleteOne({ _id: req.params.id });
    res.status(200).json(insured);
  });

module.exports = { 
    getInsureds, 
    createInsured, 
    getInsured,
    updateInsured, 
    deleteInsured }