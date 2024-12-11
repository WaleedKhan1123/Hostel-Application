import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import hostelApp from "./routes/hostelApplication.js";
const app = express();
const url ="";  //put your own url here 
mongoose.connect(url).then(() => console.log("Connected to the database"));
app.listen(5000);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/hostelApplicants", hostelApp);
app.use("/ViewApplicants", hostelApp);
