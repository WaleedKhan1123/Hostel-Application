
const AddApplicant = () => {
    
    
    function handleChange(){

    
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
    <input type="text" className="form-control mb-3" name="studentName" onChange={(e)=>handleChange(e)}/>
    <button className="btn btn-primary form-control">Apply</button>
    </form>    
    </div> );
}
 
export default AddApplicant;