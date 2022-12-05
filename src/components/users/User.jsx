import Navbar from "../Navbar";
import Footer from "../Footer";
import UserSidebar from "./UserSidebar";
import OrderNavbar from "./UserNavbar";

function Stock() {
    return (
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <section className="flex py-4 my-8">
                    <UserSidebar />
                    <section>
                        <OrderNavbar />
                        <div>
                            {items.map((item) => {
                                return (
                                    <div>
                                        <ul className="flex flex-row py-2 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
                                            <li id="name" className="flex-none w-28">
                                                {item.name}
                                            </li>
                                            <li id="email" className="flex-none w-56">
                                                {item.email}
                                            </li>
                                            <li id="age" className="flex-none w-20">
                                                {item.age}
                                            </li>
                                            <li id="role" className="flex-none w-36">
                                                {item.role}
                                            </li>
                                            <li id="phone" className="flex-none w-36">
                                                {item.phone}
                                            </li>
                                            <li id="action" className="flex-none px-10 w-100">
                                                <div className="flex gap-3">
                                                    <button type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                                                    <button type="button" class="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
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

export default Stock;