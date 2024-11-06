const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({

    companyLogo: {
        type: String,

    },
    companyName: {
        type: String,
        // required: true,
    },
    jobTitle: {
        type: String,
        // required: true,
    },
    jobnature: {
        type: String,
        // required: true,
    },
    jobTime: {
        type: String,
        // required: true,
    },
    workplaceType:[ {
        type: String,
        
        
    }],
    workLocation: [{
        type: String,
    }
    ],
    jobCategory: [{
        type: String,
    }],
    skillsRequired:[ {
        type: String
    }], 
    experienceRequired: {
        type: String,
    },
    salaryType: {
        type: String,
    },
    salaryRange: {
        type: String,
    }, 
    otherBenefits: {
        type: String,
    }, 
    jobDescription: {
        type: String,
    }, 
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
   
        applications: [
            {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Application'
            }
        ]
 

}, { timestamps:true} );

const job = mongoose.model("job", jobSchema);
module.exports = job;