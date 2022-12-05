import { Link } from "react-router-dom";

function Rental() {
    return (
        <div>
            {items.map((item) => {
                return (
                    <div>
                        <ul className="flex flex-row py-5 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
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
                            <li id="state" className="flex-none w-36">
                                {item.state}
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

export default Rental