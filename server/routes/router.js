const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('request came in!');
    res.json('Server answered');
});


module.exports = router;