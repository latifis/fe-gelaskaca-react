import Navbar from "../../Navbar";
import Footer from "../../Footer";
import OrderSidebar from "../OrderSidebar";
import RentalNavbar from "./RentalNavbar";
import Rental from "./Rental";
import { Link } from "react-router-dom";

function IndexRental() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <div>
                    <section className="bg-gray-100 py-3 px-11 my-5">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/order">Orders</Link>
                                </li>
                                <li>
                                    <Link to="/order/rental" aria-label="current-page">
                                        All Rentals
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <OrderSidebar />
                    <section>
                        <RentalNavbar />
                        <Rental />
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default IndexRental;