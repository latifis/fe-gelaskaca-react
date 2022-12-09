import Navbar from "../../Navbar";
import Footer from "../../Footer";
import PaymentSidebar from "../PaymentSidebar";
import ApprovedNavbar from "./ApprovedNavbar";
import Approved from "./Approved";
import { Link } from "react-router-dom";

function IndexApproved() {
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
                                    <Link to="/payment/approved" aria-label="current-page">
                                        Approved
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <PaymentSidebar />
                    <section>
                        <ApprovedNavbar />
                        <Approved />
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default IndexApproved;