import Navbar from "../../Navbar";
import Footer from "../../Footer";
import PaymentSidebar from "../PaymentSidebar";
import PaymentNavbar from "../PaymentNavbar";
import { Link } from "react-router-dom";

function IndexAdd() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <div>
                    <section className="bg-gray-100 py-3 px-11 my-5">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/payment">Payments</Link>
                                </li>
                                <li>
                                    <Link to="/payment/list" aria-label="current-page">
                                        All Payments
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <PaymentSidebar />
                    <section>
                        <PaymentNavbar />
                        <div>
                            {items.map((item) => {
                                return (
                                    <div>
                                        <ul className="flex flex-row py-2 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
                                            <li id="name" className="flex-none w-32">
                                                {item.name}
                                            </li>
                                            <li id="phone" className="flex-none w-56">
                                                {item.phone}
                                            </li>
                                            <li id="total" className="flex-none w-36">
                                                {item.total}
                                            </li>
                                            <li id="dp" className="flex-none w-56">
                                                {item.dp}
                                            </li>
                                            <li id="action" className="flex-none px-2 w-100">
                                                <div className="flex gap-3">
                                                    <button type="button" class="inline-block px-5 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Assign</button>
                                                    <button type="button" class="inline-block px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Proof</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

const items = [
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        dp: 5500000,
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        dp: 5500000,
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        dp: 5500000,
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        dp: 5500000,
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        dp: 5500000,
    },
]

export default IndexAdd;