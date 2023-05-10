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
    email: {
        type: String,
        required: [true, "Please add the email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"]
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