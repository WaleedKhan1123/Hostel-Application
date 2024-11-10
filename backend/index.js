import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import hostelApp from "./routes/hostelApplication.js";
const app = express();
const url = "mongodb+srv://waleedkn270:waleedkh11@hostelapplicants.fjqdy.mongodb.net/?retryWrites=true&w=majority&appName=HostelApplicants"
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=> console.log("Connected to the database"));
app.listen(5000);
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/hostelApplicants",hostelApp);