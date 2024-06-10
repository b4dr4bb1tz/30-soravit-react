import { Link } from "react-router-dom";


export default function Navigation(){
    return (
        
            <div className="flex bg-gray-200 justify-end md:max-w-full border border-b-2 border-black ">
                <div className="text-2xl font-semibold m-4">
                    <Link to="/"><button>Home</button></Link>
                </div>
                <div className="text-2xl font-semibold m-4 mr-5">
                    <Link to="/owner"><button>Owner</button></Link>
                </div>
            </div>
        
    );
}