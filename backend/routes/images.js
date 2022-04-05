const express = require('express');
const router = express.Router();
const path = require('path');

//get pic
router.get('/:filename', (req,res) => {
    const fileName = req.params.filename;
    console.log('hello');
    res.sendFile(path.join(__dirname, `../images/${fileName}`));
});

module.exports = router;