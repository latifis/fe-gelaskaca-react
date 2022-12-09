import { Link } from "react-router-dom";

function PaymentNavbar() {
    return (
        <nav className="mb-8">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="name" className="flex-none w-32">
                    Name
                </li>
                <li id="phone" className="felx-none w-56">
                    Phone
                </li>
                <li id="total" className="flex-none w-36">
                    Total Payment
                </li>
                <li id="dp" className="flex-none w-52">
                    Down Payment
                </li>
                <li id="action" className="flex-none px-5 w-56">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default PaymentNavbar