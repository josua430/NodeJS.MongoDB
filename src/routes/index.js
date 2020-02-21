const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    //res.send('Hola mundo!');
    res.render('index');
})
module.exports = router;