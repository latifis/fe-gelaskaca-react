import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddCategory() {
	const [catData, setCatData] = useState([]);

	const fetchData = async () => {
		try {
			await axios.get("http://localhost:8080/api/categorys").then((res) => {
				setCatData(() => res.data);
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="px-8">
			<p className="font-bold text-xl mb-4">Add Category</p>
			<form action="">
				<div className="flex flex-col gap-4 px-8">
					<div className="flex flex-row items-center gap-4">
						<label id="picture" className="w-40 font-semibold">
							Gambar Kategori{" "}
						</label>
						<label className="w-4">:</label>
					</div>
					<section class="flex items-center justify-center w-full my-1">
						<label
							for="dropzone-file"
							class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
						>
							<div class="flex flex-col items-center justify-center pt-4 pb-6">
								<svg
									aria-hidden="true"
									class="w-10 h-10 mb-3 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
									></path>
								</svg>
								<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span class="font-semibold">Klik</span> atau drag and drop
								</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">
									JPG atau PNG
								</p>
							</div>
							<input id="dropzone-file" type="file" class="hidden" />
						</label>
					</section>
					<div className="flex flex-row items-center gap-4">
						<label id="name" className="w-72 font-semibold">
							Nama Kategori{" "}
						</label>
						<label className="w-4">:</label>
						<input
							type="text"
							className="w-full border-2 p-1 text-sm"
							placeholder="masukkan nama produk"
							required
						/>
					</div>
					<div className="flex flex-row items-center justify-end gap-4">
						<Link
							className="text-white bg-blue-600 rounded-lg font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-md"
						>
							Submit
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
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
];

export default AddCategory;
