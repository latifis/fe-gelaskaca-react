import Navbar from "../Navbar";
import Footer from "../Footer";
import OrderSidebar from "./OrderSidebar";
import RentalNavbar from "./rentals/RentalNavbar";
import Rental from "./rentals/Rental";

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

export default Order;