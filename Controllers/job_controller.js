const job = require("../models/job_model.js")
// const jwt = require('jsonwebtoken')

const cloudinary = require ('cloudinary')
  // Configuration
   
cloudinary.config({ 
    cloud_name: 'dkv0isrrg', 
    api_key: '948773496146836', 
    api_secret: 'w0FfFpMlUY-JKKcN4OxUROxPd2o' // Click 'View API Keys' above to copy your API secret
});

 

const postjob = async (req, res) => {
    try {
        let user = req.user
        if (!user) {
            res.status(400).json({ message: "please login first" })
        }
        let role = user.role
        if (role == "student") {
            res.status(400).json({ message: "student can't create job" })
        }
        const userid = user.id
        // await job.deleteMany({})


        let {
            companyLogo,
            companyName,
            workLocation,
            jobTitle,
            jobnature,
            jobTime,
            workplaceType,
            jobCategory,
            skillsRequired,
            experienceRequired,
            salaryType, salaryRange,
            otherBenefits,
            jobDescription } = req.body

const file ="data:image/jpeg"
             // Upload an image
     const uploadResult = await cloudinary.uploader
     .upload(
         file
     )
     .catch((error) => {
         console.log(error);
     });
  
  console.log(uploadResult);


        let jobdata = await job.create
            ({
                companyLogo:uploadResult,
                companyName,
                workLocation,
                jobTitle,
                jobnature,
                jobTime,
                workplaceType,
                jobCategory,
                skillsRequired,
                experienceRequired,
                salaryType,
                salaryRange,
                otherBenefits,
                jobDescription,
                created_by: userid
            })
        res.status(201).json({ message: "job created successfuly", success: true, user, jobdata })
    } catch (error) {
        console.log(error)
    }
}




const getalljob = async (req, res) => {
    try {
        const posts = await job.find().populate({ path: "created_by" });
        res.send( posts )
        console.log("posts send succesfully ")
    } catch (error) {

    }
}

const getdommyjob = async (req, res) => {
    try {
        // const posts = await job.find().populate({ path: "created_by" });
        res.send([
            {
              title: "HR Consultant / Recruiter",
              company: "com",
              location: "Indore, Mumbai Suburbs",
              dateUpdated: "Oct 8, 2024",
              applied: "1",
              deadline: "14 days left",
              impressions: "260",
              experience: "Experienced Professionals",
              type: "Job",
              gender: "Female",
              logo: "https://via.placeholder.com/50", // Placeholder logo for HR Consultant
            },
              {
        title: "Guest Service Associate",
        company: "Cococart Ventures Pvt Ltd",
        location: "",
        dateUpdated: "",
        applied: 1,
        deadline: "29 days left",
        impressions: 300,
        experience: "Fresher",
        type: "Job",
        gender: "Female",
        logo: "https://via.placeholder.com/50", // Placeholder logo for Guest Service
      },
        ])
        console.log("posts send succesfully ")
    } catch (error) {

    }
}


const getpostbyid = async (req, res) => {
    try {
        const jobid = req.params.id
        const jobinfo = await job.findById(jobid).populate({ path: "created_by" })
        if (!job) {
            res.status(400).json({ message: "job not found", success: false })
        }
        return res.status(200).json({ jobinfo, success: true })

    } catch (error) {
        console.log(error)

    }

}

const getadminjob = async (req, res) => {

    try {

        const adminid = req.user.id
        const posts = await job.find({ created_by: adminid }).populate({ path: "created_by" })
        if (posts == "") {
            res.status(200).json("job not found")
        }
        else { res.status(200).json(posts) }
    } catch (error) {

        res.status(200).json("job not found")
    }
}




module.exports = { postjob, getalljob, getpostbyid, getadminjob, getdommyjob }