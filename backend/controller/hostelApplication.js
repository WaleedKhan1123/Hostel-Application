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



export const deleteApplication = async (req, res) => {
    try {
      const { id } = req.params;
      await hostelApplicationModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Application deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  export const updateApplication = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedApplication = await hostelApplicationModel.findByIdAndUpdate(id, updatedData, { new: true });
      res.status(200).json(updatedApplication);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };