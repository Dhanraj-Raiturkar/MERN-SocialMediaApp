const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname;
        req.filename = fileName;
        cb(null, fileName);
    }
});

const upload = multer({ storage: fileStorage });

module.exports = upload;