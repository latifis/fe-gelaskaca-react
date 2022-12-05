import { Link } from "react-router-dom";

function ReturnedNavbar() {
    return (
        <nav className="mb-5">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="rent_start" className="felx-none w-40">
                    Rental Start
                </li>
                <li id="name" className="flex-none w-32">
                    Name
                </li>
                <li id="address" className="flex-none w-72">
                    Address
                </li>
                <li id="rent_end" className="flex-none w-40">
                    Rental End
                </li>
                <li id="state" className="flex-none w-36">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default ReturnedNavbar