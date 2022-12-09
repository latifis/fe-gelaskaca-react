import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Categories from "../../Categories";
import Modal from "./Modal";

const items = [
	{
		name: "Sound System",
	},
	{
		name: "Bridging",
	},
];

function Category() {
	const [showModal, setShowModal] = useState(false);
	const [cat, setCat] = useState([]);
	const [data, setData] = useState([]);

	// const fetchData = async () => {
	// 	try {
	// 		await axios.get("htpp://localhost:8080/api/categorys")
    //         .then((response) => {
	// 			setCat(() => response.data);
	// 		});
	// 	} catch(err) {
	// 		console.log(err)
	// 	}
	// };

    const saveCat = async () => {
        try{
            await axios.post("http://localhost:8080/api/categorys").then((res) => {
                console.log(res);
            })
        } catch(err){
            console.log(err)
        }
    }

    const getCat = () => {
        setCat(items);
		setData(items);
    }
	useEffect(() => {
		// fetchData();
        getCat();
	}, []);

    
    
	return (
		<div>
			{data.map((item, index) => (
				<div key={index}>
					<ul className="flex flex-row py-2 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
					<li id="image" className="flex-none w-96">
							{/* {item.name} */}
						</li>
						<li id="name" className="felx-none w-64">
							{item.name}
						</li>
						<li id="action" className="flex-none px-5 w-100">
							<div className="flex gap-3">
								<Link
									onClick={`/product/categories/${index}`}
									type="button"
									class="inline-block px-5 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out"
								>
									Edit
								</Link>
								<button
									type="button"
									class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out"
								>
									Delete
								</button>
							</div>
						</li>
					</ul>
				</div>
			))}
		</div>
	);
}

export default Category;
