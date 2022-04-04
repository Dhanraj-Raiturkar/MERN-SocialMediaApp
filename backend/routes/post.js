const express = require('express');
const router = express.Router();
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: fileStorage });

router.post('/single', upload.single('coverPicUpload'), (req,res) => {
    console.log(req.file);
});


module.exports = router;