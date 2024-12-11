import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="w-100 bg-success">
        <Link to="/" className="ms-5 me-5 text-decoration-none text-white">
          Apply
        </Link>
        <Link
          to="/ViewApplicants"
          className="ms-5 me-5 text-decoration-none text-white"
        >
          View Applications
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
