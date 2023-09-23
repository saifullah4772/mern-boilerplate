import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col space-y-4 text-left px-6">
          <div className="text-7xl font-bold text-gray-900">404</div>
          <div className="text-stone-500 font-medium">
            Oops, you still haven't found what you lookng for?
          </div>
          <div className="flex space-x-4 items-center justify-start">
            <Link
              to={"/"}
              className="text-sm font-medium duration-150 bg-gray-900 p-4 hover:rounded-md text-gray-100"
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
