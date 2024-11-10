import axios from "axios";
const url = "https://localhost:5000"

export const AddApplicants = async (applicantData) =>{
return await axios.post(`${url}/hostelApplicants`,applicantData);
}