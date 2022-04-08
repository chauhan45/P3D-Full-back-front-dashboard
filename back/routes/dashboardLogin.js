const router = require("express").Router();
router.route( "/add" ).post(
    (req, res) => {
        console.log("random");
    }
);
module.exports = router;