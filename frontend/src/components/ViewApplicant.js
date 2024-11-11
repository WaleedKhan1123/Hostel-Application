import { useEffect, useState } from "react";
import { GetApplicants,DeleteApplicant,UpdateApplicant } from "../Service/api";

const ViewApplicant= () => {
  const [appData,setAppData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ studentName: "", registrationNumber: "" });
  useEffect(()=>  {
    getData();
  },[]);


  const getData= async ()=>{

    const result = await GetApplicants();
    setAppData(result.data);
  }
  const handleDelete = async (id) => {
    await DeleteApplicant(id);
    getData(); 
  };
  const handleEditClick = (details) => {
    setEditId(details._id);
    setEditData({ studentName: details.studentName, registrationNumber: details.registrationNumber });
  };
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    await UpdateApplicant(editId, editData);
    setEditId(null);
    getData(); 
  };

    return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
   <table class="table">
  <thead>
    <tr >
      <th scope="col">Student Name</th>
      <th scope="col">Registration Number</th>
      <th scope="col" className="text-center">Actions</th>
    </tr>
  </thead>

  <tbody>
          {appData.map((details) => (
            <tr key={details._id}>
              <td>
                {editId === details._id ? (
                  <input
                    type="text"
                    name="studentName"
                    className="form-control"
                    value={editData.studentName}
                    onChange={handleEditChange}
                  />
                ) : (
                  details.studentName
                )}
              </td>
              <td>
                {editId === details._id ? (
                  <input
                    type="text"
                    name="registrationNumber"
                    className="form-control"
                    value={editData.registrationNumber}
                    onChange={handleEditChange}
                  />
                ) : (
                  details.registrationNumber
                )}
              </td>
              <td>
                {editId === details._id ? (
                  <button className="btn btn-success" onClick={handleEditSubmit}>
                    Save
                  </button>
                ) : (
                  <>
                    <button className="btn btn-warning" onClick={() => handleEditClick(details)}>
                      Edit
                    </button>
                    <button className="btn btn-danger ms-4 " onClick={() => handleDelete(details._id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
</table>

    </div> );    
}
 
export default ViewApplicant 