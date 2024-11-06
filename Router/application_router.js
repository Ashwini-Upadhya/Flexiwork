const express = require("express");
const router = express.Router();
const authrization = require("../middleware/auth.js")
const application_controller = require("../Controllers/application_controller.js") 

router.use(express.json());

var cors = require('cors')
router.use(cors(corsOptions));
var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
  };

router.route("/applyjob/:id").get(authrization, application_controller.applyjob );
router.route("/getAppliedjobs/:id").get(authrization, application_controller. getAppliedjobs );
router.route("/getapplicants/:id").get(authrization, application_controller. getapplicants );
router.route("/updatestatus/:id").post(authrization, application_controller.updatestatus);


module.exports = router;