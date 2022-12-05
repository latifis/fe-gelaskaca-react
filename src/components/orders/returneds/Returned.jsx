import { Link } from "react-router-dom";

function Returned() {
    return (
        <div>
            {items.map((item) => {
                return (
                    <div>
                        <ul className="flex flex-row py-3 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
                            <li id="rent_start" className="felx-none w-40">
                                {item.rent_start}
                            </li>
                            <li id="name" className="flex-none w-32">
                                {item.name}
                            </li>
                            <li id="address" className="flex-none w-72">
                                {item.address}
                            </li>
                            <li id="rent_end" className="flex-none w-40">
                                {item.rent_end}
                            </li>
                            <li id="action" className="flex-none w-36">
                                <button to="" type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">DETAIL</button>
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
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        state: "On Going",
    },
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        state: "On Going",
    },
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        state: "On Going",
    },
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        state: "On Going",
    },
]

export default Returned