const pool = require("../db/db");

var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    const menu = await pool.query("select * from menu");
    // console.log(menu[0]);
    res.render('menu', {
        menu : menu[0]
    })
    
});

module.exports = router;