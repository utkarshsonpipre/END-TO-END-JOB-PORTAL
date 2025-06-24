import { Job } from "../models/job.model.js";

// POST: Admin posts a new job
export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experience,
            position,
            companyId
        } = req.body;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        const salaryValue = Number(salary);
        if (isNaN(salaryValue)) {
            return res.status(400).json({
                message: "Salary must be a valid number.",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(",").map(r => r.trim()),
            salary: salaryValue,
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: req.id
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });

    } catch (error) {
        console.error("Job creation error:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

// GET: All jobs for student users
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        };

        const jobs = await Job.find(query)
            .populate("company")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.error("Get all jobs error:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

// GET: Single job by ID (with applications populated)
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate("applications");

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.error("Get job by ID error:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

// GET: Admin's posted jobs
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;

        const jobs = await Job.find({ created_by: adminId })
            .populate("company")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.error("Get admin jobs error:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};
