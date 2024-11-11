import express from "express";
import { createApplication, getApplication,deleteApplication,updateApplication } from "../controller/hostelApplication.js";

const router = express.Router();

router.get("/",getApplication)
router.post("/",createApplication);
router.delete("/:id", deleteApplication); 
router.put("/:id", updateApplication);    

export default router