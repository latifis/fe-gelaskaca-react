import Navbar from "../Navbar";
import Footer from "../Footer";
import OrderSidebar from "./OrderSidebar";
import RentalNavbar from "./rentals/RentalNavbar";
import Rental from "./rentals/Rental";
import { Link } from "react-router-dom";

const items = [
    {
        id: "223SDJ34",
        name: "Speaker Kecil",
        type: "Sound System",
        kuantitas: 1,
        date: "13/12/2022",
        status: "UPCOMING",
    }
]

function Order() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <div>
                    <section className="bg-gray-100 py-3 px-11 my-5">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/order" aria-label="current-page">
                                        Orders
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <OrderSidebar />
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Order;