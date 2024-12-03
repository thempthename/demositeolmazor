import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-secondary text-center py-20">
      <h1 className="text-6xl font-bold text-highlight">404</h1>
      <p className="text-accent text-lg mt-4">Page not found</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-highlight text-primary px-6 py-2 rounded-lg shadow-lg hover:bg-accent transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
