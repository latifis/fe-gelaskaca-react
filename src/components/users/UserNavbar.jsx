import { Link } from "react-router-dom";

function StockNavbar(){
    return(
        <nav className="mb-8">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="name" className="flex-none w-28">
                    Name
                </li>
                <li id="email" className="felx-none w-56">
                    Email
                </li>
                <li id="age" className="flex-none w-20">
                    Age
                </li>
                <li id="role" className="flex-none w-36">
                    Role
                </li>
                <li id="phone" className="flex-none w-36">
                    Phone
                </li>
                <li id="action" className="flex-none px-5 w-56">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default StockNavbar