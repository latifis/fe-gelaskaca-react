import Navbar from "../../Navbar";
import Footer from "../../Footer";
import OrderSidebar from "../OrderSidebar";
import ReturnedNavbar from "./ReturnedNavbar";
import Returned from "./Returned";

function IndexReturned() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
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