import { useState } from "react";
import { AddApplicants } from "../Service/api";
const AddApplicant = () => {
    
    const[applicantData,setApplicants]=useState({
     studentName:"",
     registrationNumber:""
    }
    )

    const {studentName,registrationNumber} = applicantData;


    const handleChange = (e) =>{
         setApplicants({...applicantData,[e.target.name]: [e.target.value]})
    
    }
    const addDetails = async(e)=>{
      e.preventDefault();
      await AddApplicants(applicantData);
    
    }
    return ( 
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
    <form>
    <label className="mb-2">
     Student Name
    </label>
    <input type="text" className="form-control mb-3" name="studentName" onChange={(e)=>handleChange(e)}/>
    <label className="mb-2">
     Registration Number
    </label>
    <input type="text" className="form-control mb-3" name="registrationNumber" onChange={(e)=>handleChange(e)}/>
    <button className="btn btn-primary form-control" onChange={(e)=>addDetails(e)}>Apply</button>
    </form>  
    {applicantData.studentName}
    <br/>
    {applicantData.registrationNumber}  
    </div> );
}
 
export default AddApplicant;