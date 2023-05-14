const express = require("express");
const router = express.Router();
const {
    getPolicies,
    createPolicy,
    getPolicy,
    updatePolicy,
    deletePolicy
} = require("../Controllers/policyController");
const validateToken = require("../Middleware/validateTokenHandler");

router.use(validateToken);
router.router("/").get(getPolicies).post(createPolicy);
router.router("/:id").get(getPolicy).put(updatePolicy).delete(deletePolicy);

module.exports = router;