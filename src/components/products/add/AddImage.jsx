function AddImage() {
    return(
        <div>
            <div className="px-8">
                <p className="font-bold text-xl mb-4">Detail Product</p>
                <form action="">
                    <div className="flex flex-col gap-4 px-8">
                        <div className="flex flex-row items-center gap-4">
                            <label id="name" className="w-52 font-semibold">Pilih Nama Produk </label>
                            <label className="w-4">:</label>
                            <select className="w-full border-2 p-1 text-sm">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            {/* <input type="text" className="w-full border-2 p-1 text-sm" placeholder="masukkan nama produk" required/> */}
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <label id="merk" className="w-52 font-semibold">Merk Produk </label>
                            <label className="w-4">:</label>
                            <input type="text" className="w-full border-2 p-1 text-sm" placeholder="masukkan merk produk" required/>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <label id="price" className="w-52 font-semibold">Harga </label>
                            <label className="w-4">:</label>
                            <input type="text" className="w-full border-2 p-1 text-sm" placeholder="masukkan harga produk per item" required/>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <label id="desc" className="w-52 font-semibold">Deskripsi </label>
                            <label className="w-4">:</label>
                            <textarea cols="30" rows="6" className="w-full border-2 p-1 text-sm" placeholder="masukkan deskripsi produk"></textarea> 
                        </div>
                        <div className="flex flex-row items-center justify-end gap-4">
                            <button className="text-white bg-blue-600 rounded-lg font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-md">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddImage;