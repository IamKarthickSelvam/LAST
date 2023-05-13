const express = require("express")
const router = express.Router()
const {
    getInsureds,
    createInsured,
    getInsured,
    updateInsured,
    deleteInsured
} = require("../Controllers/insuredController")
const validateToken = require("../Middleware/validateTokenHandler")

router.use(validateToken)
router.route("/").get(getInsureds).post(createInsured)
router.route("/:id").get(getInsured).put(updateInsured).delete(deleteInsured)

module.exports = router