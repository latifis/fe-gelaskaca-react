import Navbar from "../../Navbar";
import Footer from "../../Footer";
import OrderSidebar from "../OrderSidebar";
import ReturnedNavbar from "./ReturnedNavbar";
import Returned from "./Returned";
import { Link } from "react-router-dom";

function IndexReturned() {
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
                                    <Link to="/order/return" aria-label="current-page">
                                        Returns
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <OrderSidebar />
                    <section>
                        <ReturnedNavbar />
                        <Returned />
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default IndexReturned;