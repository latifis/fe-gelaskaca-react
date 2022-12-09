import { Link } from "react-router-dom";

function CategoryNavbar(){
    return(
        <nav className="mb-5">
            <div className="flex justify-end">
                <Link to="/product/add-category" className="bg-blue-600 rounded-xl p-2 px-4 font-semibold text-white mb-4 hover:shadow-md">Add</Link>
            </div>
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="image" className="flex-none w-96">
                    Image
                </li>
                <li id="name" className="flex-none w-64">
                    Name
                </li>
                <li id="action" className="flex-none px-5 w-64">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default CategoryNavbar;