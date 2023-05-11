const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the insured name"]
    },
    country: {
        type: String,
        required: [true, "Please add the country details"]
    },
    insurancetype: {
        type: String,
        required: [true, "Please add the Insurance type"]
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Insured", userSchema)