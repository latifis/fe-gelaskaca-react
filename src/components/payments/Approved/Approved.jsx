import { Link } from "react-router-dom";

function Approved() {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div>
                        <ul className="flex flex-row py-2 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
                            <li id="name" className="flex-none w-32">
                                {item.name}
                            </li>
                            <li id="phone" className="flex-none w-56">
                                {item.phone}
                            </li>
                            <li id="total" className="flex-none w-36">
                                {item.total}
                            </li>
                            <li id="pic" className="flex-none w-56">
                                {item.pic}
                            </li>
                            <li id="action" className="flex-none px-2 w-100">
                                <div className="flex gap-0">
                                    <button type="button" class="inline-block px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">Proof</button>
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
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        pic: "Yohantop Ko",
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        pic: "Yohantop Ko",
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        pic: "Yohantop Ko",
    },
    {
        name: "Latif",
        phone: "0822233383883",
        total: 200000,
        pic: "Yohantop Ko",
    },
]

export default Approved