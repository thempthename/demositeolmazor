import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-highlight text-primary py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Olmazor Specialized School</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/familyofschool" className="hover:text-secondary">
              Family of School
            </Link>
          </li>
          <li>
            <Link to="/imagesandvideos" className="hover:text-secondary">
              Images & Videos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
