import { Link } from "react-router-dom";

function Stock() {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <ul className="flex flex-row py-2 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
                            <li id="code" className="felx-none w-40">
                                {item.code}
                            </li>
                            <li id="name" className="flex-none w-48">
                                {item.name}
                                {/* <br />
                                <p className="text-xs text-gray-500 mt-1">
                                    {item.type}
                                </p> */}
                            </li>
                            <li id="price" className="flex-none w-32">
                                {item.price}
                            </li>
                            <li id="quantity" className="flex-none w-40">
                                {item.quantity}
                            </li>
                            <li id="action" className="flex-none px-5 w-100">
                                <div className="flex gap-3">
                                    <button type="button" class="inline-block px-5 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                                    <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

const items = [
    {
        code: "H02032",
        name: "Lampu Taman",
        type: "Lampu",
        price: 5000000,
        quantity: 30,
    },
    {
        code: "H02033",
        name: "Lampu Taman",
        type: "Lampu",
        price: 5000000,
        quantity: 30,
    },
    {
        code: "H02034",
        name: "Lampu Taman",
        type: "Lampu",
        price: 5000000,
        quantity: 30,
    },
    {
        code: "H02035",
        name: "Lampu Taman",
        type: "Lampu",
        price: 5000000,
        quantity: 30,
    },
]

export default Stock