const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        // required: true,
    },
    lastname: {
        type: String,
        // required: true,
    },
    username: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['JobSeeker', 'Recruiter'],
        required: true,
    },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String },  //url of resume file
        resumeoriginalname: { type: String },
        profilephoto: { type: String, default: "" },

    created_job: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'job'
     },

     apply_job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
        }

    }
}, { timestamps: true });


const User = new mongoose.model("User", userSchema)
module.exports = User;