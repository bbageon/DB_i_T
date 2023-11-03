var express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
    // const login = await pool.query("select * from login");
    // console.log(menu[0]);
    res.render('index', {
        // login : login[0]
    })
});

router.post('/', async (req, res) => {
    // const {userid, userPassword}=req.body[1]
    console.log(req.body[1])
});


module.exports = router;