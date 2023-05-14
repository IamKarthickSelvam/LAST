const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the policy name"]
    },
    type: {
        type: String,
        required: [true, "Please add the policy type"]
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Policy", userSchema);