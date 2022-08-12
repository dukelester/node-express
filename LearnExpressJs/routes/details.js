const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.render("details", {title:"About Duke Lester"});
});



module.exports = router;