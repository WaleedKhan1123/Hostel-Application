import axios from "axios";
const url = "http://localhost:5000"

export const AddApplicants = async (applicantData) =>{
return await axios.post(`${url}/hostelApplicants`,applicantData);
}

export const GetApplicants = async() =>{
    return await axios.get(`${url}/ViewApplicants`);
}


export const DeleteApplicant = async (id) => {
    return await axios.delete(`${url}/ViewApplicants/${id}`);
  };


  export const UpdateApplicant = async (id, updatedData) => {
    return await axios.put(`${url}/ViewApplicants/${id}`, updatedData);
  };