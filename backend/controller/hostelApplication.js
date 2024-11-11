import hostelApplicationModel from "../model/hostelapplication.js";
export const getApplication  = async (req,res)=>{
try {
    const hostelApplicant = await hostelApplicationModel.find();
    res.json(hostelApplicant);
} catch (error) {
    console.log("No data Found");
}
};

export const createApplication = async (req,res) =>{
const studentName = req.body.studentName.toString();
const registrationNumber = req.body.registrationNumber.toString();
const newApplicant = new hostelApplicationModel({
    studentName : studentName,
    registrationNumber: registrationNumber
});
try{
    await newApplicant.save();
    res.json(newApplicant);
} catch (error){

    console.log("not Saved...");
}
};