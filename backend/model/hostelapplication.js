import mongoose from "mongoose";

const hostelApplicationStructure = mongoose.Schema({
    studentName:String,
    registrationNumber:String
});
const hostelApplicantModel