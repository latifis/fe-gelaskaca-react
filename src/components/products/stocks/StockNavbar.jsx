import { Link } from "react-router-dom";

function StockNavbar() {
    return (
        <nav className="mb-5">
            <div className="flex justify-end">
                <Link to="/product/add-product" className="bg-blue-600 rounded-xl p-2 px-4 font-semibold text-white mb-4 hover:shadow-md">Add</Link>
            </div>
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="code" className="felx-none w-32">
                    Code
                </li>
                <li id="name" className="flex-none w-44">
                    Name
                </li>
                <li id="price" className="flex-none w-32">
                    Price
                </li>
                <li id="category" className="flex-none w-32">
                    Category
                </li>
                <li id="quantity" className="flex-none w-32">
                    Quantity
                </li>
                <li id="action" className="flex-none px-5 w-48">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default StockNavbar