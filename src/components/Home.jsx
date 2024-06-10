import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col h-screen bg-gray-300 items-center">
            <div className="flex flex-col justify-center my-6 text-center ">
                <h1 className="text-3xl font-bold">
                    Generation Thailand <br /> React - Assessment
                </h1>
            </div>
            <div className="flex space-x-4">
                <Link to="/users" className="bg-gray-500 text-white font-semibold rounded-lg shadow-2xl px-4 py-2">
                    <button>User Section</button>
                </Link>
                <Link to="/admin" className="bg-gray-500 text-white font-semibold rounded-lg shadow-2xl px-4 py-2">
                    <button>Admin Section</button>
                </Link>
            </div>
        </div>
    );
}
