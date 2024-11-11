import express from "express";
import { createApplication, getApplication,deleteApplication,updateApplication } from "../controller/hostelApplication.js";

const router = express.Router();

router.get("/",getApplication)
router.post("/",createApplication);
router.delete("/:id", deleteApplication); // Route for delete
router.put("/:id", updateApplication);    // Route for update

export default router