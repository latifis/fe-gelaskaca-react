import { Link } from "react-router-dom";

function StockNavbar() {
    return (
        <nav className="mb-5">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="code" className="felx-none w-40">
                    Code
                </li>
                <li id="name" className="flex-none w-48">
                    Name
                </li>
                <li id="price" className="flex-none w-32">
                    Price
                </li>
                <li id="quantity" className="flex-none w-40">
                    Quantity
                </li>
                <li id="action" className="flex-none px-5 w-56">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default StockNavbar