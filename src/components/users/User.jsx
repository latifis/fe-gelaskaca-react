import Navbar from "../Navbar";
import Footer from "../Footer";
import UserSidebar from "./UserSidebar";
import IndexLAdd from "./add/IndexAdd";
import { Link } from "react-router-dom";

function User() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <div>
                    <section className="bg-gray-100 py-3 px-11 my-5">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="/users" aria-label="current-page">
                                        Users
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className="flex py-4 my-8">
                    <UserSidebar />
                    <IndexLAdd/>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

const items = [
    {
        name: "Latif",
        email: "latifadmin@gmail.com",
        age: 22,
        role: "ADMIN",
        phone: "0822223432234",
    },
    {
        name: "Latifpic",
        email: "latifpicn@gmail.com",
        age: 21,
        role: "PIC",
        phone: "08222222368",
    },
    {
        name: "Latifpic",
        email: "latifpicn@gmail.com",
        age: 21,
        role: "PIC",
        phone: "08222222368",
    },
    {
        name: "Latifpic",
        email: "latifpicn@gmail.com",
        age: 21,
        role: "PIC",
        phone: "08222222368",
    },
    {
        name: "Latifpic",
        email: "latifpicn@gmail.com",
        age: 21,
        role: "PIC",
        phone: "08222222368",
    }
]

export default User;