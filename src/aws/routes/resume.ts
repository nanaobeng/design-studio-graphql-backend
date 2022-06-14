const express = require("express");
const router = express.Router();


const { addResumeToS3 } = require('../controllers/resume');

router.post("/application/add/resume",addResumeToS3);


module.exports = router;
