import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select"

function User() {
	const rentInitial = {
		name: "",
		email: "",
		age: "",
		role: "",
		phone: "",
	};

	const [userData, setUsersData] = useState([]);
	const [users, setUsers] = useState(rentInitial);
	const navigate = useNavigate();

	function inputHandler(evt) {
		const value = evt.target.value;
		setUsers({
			...users,
			[evt.target.name]: value,
		});
	}

    const options = [
        {label: "ADMIN", value: "ADMIN"},
        {label: "PIC", value: "PIC"}
    ]

	const fetchData = async () => {
		try {
			await axios.get("http://localhost:8080/api/categorys").then((res) => {
				setUsersData(() => res.data);
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const submitUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`http://localhost:8080/api/products`).then((res) => {
				navigate("/users");
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="px-8">
			<p className="font-bold text-xl mb-4">Add User</p>
			<form onSubmit={submitUser}>
				<div className="flex flex-col gap-4 px-8">
					<div className="flex flex-row items-center gap-4">
						<label className="w-52 font-semibold">Nama </label>
						<label className="w-4">:</label>
						<input
							onChange={inputHandler}
							type="text"
							name="name"
							id="name"
							value={users.name}
							className="css-13cymwt-control w-full border-2 p-2 ml-1 text-sm"
							placeholder="masukkan nama user"
							required
						/>
					</div>
					<div className="flex flex-row items-center gap-4">
						<label className="w-52 font-semibold">Email </label>
						<label className="w-4">:</label>
						<input
							onChange={inputHandler}
							type="email"
							name="email"
							id="email"
							value={users.email}
							className="css-13cymwt-control w-full border-2 p-2 ml-1 text-sm"
							placeholder="masukkan email user"
							required
						/>
					</div>
					<div className="flex flex-row items-center gap-4">
						<label className="w-52 font-semibold">Usia </label>
						<label className="w-4">:</label>
						<input
							onChange={inputHandler}
							type="text"
							name="age"
							id="age"
							value={users.age}
							className="css-13cymwt-control w-full border-2 p-2 ml-1 text-sm"
							placeholder="masukkan usia user"
							required
						/>
					</div>
					<div className="flex flex-row items-center gap-4">
						<label id="kategori" className="w-52 font-semibold">
							Kategori{" "}
						</label>
						<label className="w-4">:</label>
						{/* <select className="w-full border-2 p-1 text-sm">
                        <option selected className="text-gray-500">--pilih kategori yang tersedia--</option>
                        <option id="admin">ADMIN</option>
                        <option id="pic">PIC</option>
                    </select> */}
						<Select
							options={options}
							className="w-full text-sm"
							placeholder={"pilih role"}
						></Select>
					</div>
					<div className="flex flex-row items-center gap-4">
						<label className="w-52 font-semibold">Phone </label>
						<label className="w-4">:</label>
						<input
							onChange={inputHandler}
							type="text"
							name="phone"
							id="phone"
							value={users.phone}
							className="css-13cymwt-control w-full border-2 p-2 ml-1 text-sm"
							placeholder="masukkan nomor telepon user"
							required
						/>
					</div>
					<div className="flex flex-row items-center justify-end gap-4">
						<Link
							to="/users"
							className="text-white bg-blue-600 rounded-lg font-semibold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-md"
						>
							<input type="submit" value="Submit" />
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
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
	},
];

export default User;
