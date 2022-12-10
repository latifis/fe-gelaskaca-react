import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

function AddImage() {
	const rentInitial = {
		name: "",
		price: 0,
		brand: "",
		qty: 0,
	};

	const [catData, setCatData] = useState([]);
	const [productImage, setProductImage] = useState(rentInitial);
	const navigate = useNavigate();

	function inputHandler(evt) {
		const value = evt.target.value;
		setProductImage({
			...productImage,
			[evt.target.name]: value,
		});
	}

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

	const submitProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`http://localhost:8080/api/products`).then((res) => {
				navigate("/product/stocks");
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<div className="container px-8">
				<p className="font-bold text-xl mb-4">Add Product Image</p>
				<form onSubmit={submitProduct}>
					<div className="px-8 w-max">
						<div className="flex flex-row items-center gap-4">
							<label id="merk" className="w-40 font-semibold">
								Gambar Produk{" "}
							</label>
							<label className="w-4">:</label>
						</div>
						<section class="flex items-center justify-center w-full my-3">
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
								<input id="dropzone-file" type="file" class="hidden" multiple />
							</label>
						</section>
						<div className="flex flex-row items-center justify-end gap-4 mt-2">
							<Link
								to="/product/stocks"
								className="text-white bg-blue-600 rounded-lg font-semibold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-md"
							>
								<input type="submit" value="Submit" />
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

const items = [
	{
		userName: "aaaa",
	},
	{
		userName: "bbbb",
	},
	{
		userName: "cccc",
	},
];

export default AddImage;
