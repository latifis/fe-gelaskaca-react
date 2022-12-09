import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ProductSidebar from "../ProductSidebar";
import AddCategory from "./AddCategory";
import { Link } from "react-router-dom";

function IndexAddCategory() {
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
                                    <Link to="/product/categories">Category</Link>
                                </li>
                                <li>
                                    <Link to="/product/add-category" aria-label="current-page">
                                        Add Category
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <ProductSidebar />
                    <section>
                        <AddCategory />
                    </section>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default IndexAddCategory;