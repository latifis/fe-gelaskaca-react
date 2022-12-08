import { Link } from "react-router-dom";

function RentalNavbar() {
    return (
        <nav className="mb-5">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="rent_start" className="felx-none w-36">
                    Rental Start
                </li>
                <li id="name" className="flex-none w-28">
                    Name
                </li>
                <li id="address" className="flex-none w-52">
                    Venue Address
                </li>
                <li id="rent_end" className="flex-none w-36">
                    Rental End
                </li>
                <li id="state" className="flex-none w-36">
                    Status
                </li>
                <li id="state" className="flex-none w-24">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default RentalNavbar