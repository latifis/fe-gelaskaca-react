import Navbar from "../../Navbar";
import Footer from "../../Footer";
import OrderSidebar from "../OrderSidebar";
import RentalNavbar from "./RentalNavbar";
import Rental from "./Rental";

function IndexRental() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
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