import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Add() {
    const rentInitial = {
        name: "",
        price: 0,
        brand: "",
        desc: "",
      };
      
    const [catData, setCatData] = useState([])
    const [product, setProduct] = useState(rentInitial)
    const navigate = useNavigate();

    function inputHandler(evt) {
        const value = evt.target.value;
        setProduct({
          ...product,
          [evt.target.name]: value,
        });
      }

    const fetchData = async () => {
        try{
            await axios
            .get("http://localhost:8080/api/categorys")
            .then((res) => {
                setCatData(() => res.data)
            })
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const submitProduct = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`http://localhost:8080/api/products`).then((res) => {
            navigate("/product/add-product-image");
          });
        } catch (err) {
          console.log(err);
        }
      };

      function myFunction() {
        const x = document.getElementById("name").required
        const y = document.getElementById("merk").required
        const z = document.getElementById("price").required
        const a = document.getElementById("kategori").required  
      }

    return (
        <div className="px-8">
            <p className="font-bold text-xl mb-4">Add Product</p>
            <form onSubmit={submitProduct}>
                <div className="flex flex-col gap-4 px-8">
                    <div className="flex flex-row items-center gap-4">
                        <label className="w-52 font-semibold">Nama Produk </label>
                        <label className="w-4">:</label>
                        <input onChange={inputHandler} type="text" name="name" id="name" value={product.name} className="w-full border-2 p-1 text-sm" placeholder="masukkan nama produk" required/>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <label className="w-52 font-semibold">Merk Produk </label>
                        <label className="w-4">:</label>
                        <input onChange={inputHandler} type="text" name="brand" id="merk" value={product.brand} className="w-full border-2 p-1 text-sm" placeholder="masukkan merk produk" required/>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <label className="w-52 font-semibold">Harga </label>
                        <label className="w-4">:</label>
                        <input onChange={inputHandler} type="text" name="price" id="price" value={product.price} className="w-full border-2 p-1 text-sm" placeholder="masukkan harga produk per item" required/>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <label id="kategori" className="w-52 font-semibold">Kategori </label>
                        <label className="w-4">:</label>
                        <select className="w-full border-2 p-1 text-sm">
                            <option selected className="text-gray-500">--pilih kategori yang tersedia--</option>
                            {
                                items.map((item, index) => (
                                    <option for={index} id="kategori">{item.cat}</option>
                                ))
                            }
                        </select>
                        {/* <input type="text" className="w-full border-2 p-1 text-sm" placeholder="masukkan harga produk per item" required/> */}
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <label className="w-52 font-semibold">Deskripsi </label>
                        <label className="w-4">:</label>
                        <textarea onChange={inputHandler} value={product.desc} cols="30" rows="6" name="desc" id="desc" className="w-full border-2 p-1 text-sm" placeholder="masukkan deskripsi produk"></textarea> 
                    </div>
                    <div className="flex flex-row items-center justify-end gap-4">
                        <Link to="/product/add-product-image" className="text-white bg-blue-600 rounded-lg font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-md">
                            <input type="submit" value="Next"/>
                        </Link>
                    </div>
                </div>
            </form>
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

export default Add