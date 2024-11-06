import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddApplicant from "./components/AddApplicant";
import ViewApplicant from "./components/ViewApplicant";

function App() {
  return (
    <div >
      <h1 className="text-center">Hostel Application</h1>
     <Navbar/>
     <Routes>
      <Route path="/"/>
      <Route path="/hostelApplicants" element={<AddApplicant/>}/>
      <Route path="/ViewApplicants" element={<ViewApplicant/>}/>
     </Routes>
    </div>
  );
}

export default App;
