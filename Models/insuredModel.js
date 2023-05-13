const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the Insured name"]
    },
    country: {
        type: String,
        required: [true, "Please add the Country of the Insured"]
    },
    type: {
        type: String,
        required: [true, "Please add the Insurance type"]
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Insured", userSchema);