const express = require('express');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file,cb){
      const pathStorage = `${__dirname}/../storage`;
      cb(null, pathStorage);
    },
    filename: function(req, file,cb){
      const ext = path.originalname.split('.').pop();
      const filename = `file-${Date.now()}`.ext;
    }
})


router.post('/',  (req, res) => {
    res.send({a:1})
})


module.exports = router
