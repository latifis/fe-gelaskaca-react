import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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

function CategoryEdit() {
	// const [showModal, setShowModal] = useState(false);
	const [cat, setCat] = useState([]);
	const [data, setData] = useState([]);
	const { id } = useParams();

	const fetchData = async () => {
		try {
			await axios.get("htpp://localhost:8080/api/categorys")
	        .then((response) => {
				setCat(() => response.data);
			});
		} catch(err) {
			console.log(err)
		}
	};

	const saveCat = async () => {
		try {
			await axios.post("http://localhost:8080/api/categorys").then((res) => {
				console.log(res);
			});
		} catch (err) {
			console.log(err);
		}
	};

	const getCat = () => {
		setCat(items);
		setData(items);
	};
	useEffect(() => {
		fetchData();
		getCat();
	}, []);

	return (
		<div>
			{data.map((item, index) => (
				<div key={index}>
					<ul className="flex flex-row py-2 gap-2 items-center text-center text-sm transition duration-300 ease-in-out hover:bg-gray-100">
						<li id="name" className="felx-none w-56">
							{item.name}
						</li>
						<li id="image" className="flex-none w-96">
							{/* {item.name} */}
						</li>
						<li id="action" className="flex-none px-5 w-100">
							<div className="flex gap-3">
								<Link
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
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-1/2 my-6 mx-auto">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">{item.name}</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none" 
                                        onClick={"/product/categories"}>
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative pt-6 px-6 flex-auto">
									<p className="mt-4 mb-2 text-lg font-semibold leading-relaxed">
										Category Name
									</p>
									<input
										type="text"
										className="text-slate-500 leading-relaxed p-1 border w-full"
										value={cat[0].name}
										onChange={(e) => {
											setCat(e.target.value);
										}}
									/>
								</div>
								<div className="relative p-6 flex-auto">
									<p className="mb-2 text-lg font-semibold leading-relaxed">
										Category Image
									</p>
									<p className="mb-2 text-slate-500 leading-relaxed"></p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="bg-blue-700 text-white rounded-lg font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-md"
										type="button"
										onClick={() => saveCat()}
									>
										Save
									</button>
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={"/product/categories"}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</div>
			))}
		</div>
	);
}

export default CategoryEdit;
