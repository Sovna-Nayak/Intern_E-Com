import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 mb-6">
      <Link to="/" className="hover:underline text-blue-600">
        Home
      </Link>
      {paths.map((path, index) => {
        const route = "/" + paths.slice(0, index + 1).join("/");
        const name = path.replace("-", " ").toUpperCase();

        return (
          <span key={index}>
            {" / "}
            <Link to={route} className="hover:underline text-blue-600">
              {name}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
