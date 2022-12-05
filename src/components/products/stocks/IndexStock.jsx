import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ProductSidebar from "../ProductSidebar";
import Stock from "./Stock";
import { Link } from "react-router-dom";

function IndexStock() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <div>
                    <section className="bg-gray-100 py-3 px-11 my-5">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/product">Product</Link>
                                </li>
                                <li>
                                    <Link to="/product/stocks" aria-label="current-page">
                                        Stocks
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <ProductSidebar />
                    <section>
                        <Stock />
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default IndexStock;