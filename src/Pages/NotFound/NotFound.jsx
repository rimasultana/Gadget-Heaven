import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 font-medium text-lg"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
