const asyncHandler = require("express-async-handler");
const Policy = require("../Models/policyModel");

//@desc get all Policy
//@route GET /api/policy
//@access private
const getPolicies = asyncHandler(async (req, res) => {
    const policy = await Policy.find({ user_id: req.user.id });
    res.status(200).json({ policy });
});

//@desc create a Policy
//@route POST /api/policy
//@access private
const createPolicy = asyncHandler(async (req, res) => {
    const { name, country, type } = req.body;
    if (!name || !country || !type) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const policy = await Policy.create({
        name,
        country,
        type,
        user_id: req.user.id
    });
    res.status(200).json({ policy });
});

//@desc Get a Policy
//@route POST /api/policy/:id
//@access private
const getPolicy = asyncHandler(async (req, res) => {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
        res.status(401);
        throw new Error("Policy not found");
    }
    res.status(200).json({ policy });
});

//@desc update Policy
//@route PUT /api/policy/:id
//@access private
const updatePolicy = asyncHandler(async (req, res) => {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
        res.status(404);
        throw new Error("Policy not found");
    }

    if (policy.user_id != req.user.id) {
        res.status(403);
        throw new Error("User doesn't have the permission to update this Policy");
    }

    const updatedPolicy = await Policy.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json({ updatedPolicy });
});

//@desc Delete policy
//@route DELETE /api/policy/:id
//@access private
const deletePolicy = asyncHandler(async (req, res) => {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
        res.status(404);
        throw new Error("Policy not found");
    }
    if (policy.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have the permission to delete this Policy");
    }
    await Policy.deleteOne({ _id: req.params.id });
    res.status(200).json(policy);
});

module.exports = {
    getPolicies,
    createPolicy,
    getPolicy,
    updatePolicy,
    deletePolicy
};