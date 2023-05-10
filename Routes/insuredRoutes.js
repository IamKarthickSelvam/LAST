const express = require("express")
const router = express.Router()
const { 
    getInsureds,
    createInsured,
    getInsured,
    updateInsured,
    deleteInsured
} = require("../Controllers/insuredController")

router.route("/").get(getInsureds).post(createInsured)
router.route("/:id").get(getInsured).put(updateInsured).delete(deleteInsured)