const express = require("express");
const router = express.Router();
const job_controller = require("../Controllers/job_controller.js") 
const application_controller = require("../Controllers/application_controller.js") 

router.use(express.json());
var cors = require('cors')
const authrization = require("../middleware/auth.js");
const singleUpload = require("../middleware/multer.js");

router.use(cors(corsOptions));


var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
  };



router.route("/postjob").post( authrization,singleUpload, job_controller.postjob);
router.route("/jobs").get(job_controller.getalljob);
router.route("/dommyjobs").get(job_controller.getdommyjob);
router.route("/get/:id").get(job_controller.getpostbyid);
router.route("/adminjobs").get(authrization, job_controller.getadminjob);
router.route("/applyjob/:id").get(authrization, application_controller.applyjob );
router.route("/getAppliedjobs/:id").get(authrization, application_controller. getAppliedjobs );


module.exports = router;
