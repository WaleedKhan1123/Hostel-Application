import express from "express";
import { createApplication, getApplication } from "../controller/hostelApplication.js";

const router = express.Router();

router.get("/",getApplication)
router.post("/",createApplication);