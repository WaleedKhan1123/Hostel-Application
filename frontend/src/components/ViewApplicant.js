import { useEffect, useState } from "react";
import { GetApplicants } from "../Service/api";

const ViewApplicant= () => {
  const [appData,setAppData] = useState([]);
  useEffect(()=>  {
    getData();
  },[]);


  const getData= async ()=>{

    const result = await GetApplicants();
    setAppData(result.data);
  }
    return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Registration Number</th>
      
    </tr>
  </thead>
  <tbody>
    {appData.map((details)=>(
    <tr>
      <td>{details.studentName}</td>
      <td>{details.registrationNumber}</td>
    </tr>
))}
  </tbody>
</table>

    </div> );    
}
 
export default ViewApplicant 