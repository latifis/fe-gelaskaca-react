import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductSidebar from "./ProductSidebar";
import ProductNavbar from "./ProductNavbar";
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

function Product() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <div>
                    <section className="bg-gray-100 py-3 px-11 my-5">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/product" aria-label="current-page">
                                        Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <ProductSidebar />
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Product;