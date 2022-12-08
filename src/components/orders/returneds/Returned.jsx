import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Returned() {
    const [returns, setReturns] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const fetchId = async () => {
        try {
            await axios
                .get("htpp://localhost:8080/api/returned")
                .then((response) => {
                    setReturns(() => response.data);
                })
        } catch {
            //console.log(error)
        }
    }

    useEffect(() => {
        fetchId()
    }, [])

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
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
                            <Link onClick={() => setShowModal(true)} type="button"
                                class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">
                                DETAIL
                            </Link>
                        </li>
                    </ul>

                    {showModal ? (
                        <>
                            <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-1/2 my-6 mx-auto">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                {/* {data.productName} */}
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative pt-6 px-6 flex-auto">
                                            <p className="mt-4 mb-2 text-lg font-semibold leading-relaxed">
                                                Detail Penyewaan
                                            </p>
                                            <p className="text-slate-500 leading-relaxed">
                                                Nama Penyewa : {item.name}
                                            </p>
                                            <p className="text-slate-500 leading-relaxed">
                                                Tanggal Penyewaan : {item.rent_start}
                                            </p>
                                            <p className="text-slate-500 leading-relaxed">
                                                Tanggal Pengembalian : {item.rent_end}
                                            </p>
                                            <p className="text-slate-500 leading-relaxed">
                                                Lokasi Acara : {item.address}
                                            </p>
                                        </div>
                                        <div className="relative pt-6 px-6 flex-auto">
                                            <p className="mb-2 text-lg font-semibold leading-relaxed">
                                                Penanggung Jawab (PIC)
                                            </p>
                                            <p className="text-slate-500 leading-relaxed">
                                                {item.personCharge}
                                            </p>
                                        </div>
                                        <div className="relative pt-6 px-6 flex-auto">
                                            <p className="mb-2 text-lg font-semibold leading-relaxed">
                                                Produk
                                            </p>
                                            <p className="mb-2 text-slate-500 leading-relaxed">
                                            {item.product.map((prod, index) => (
                                                <ol type="1" key={index}>
                                                    <li>
                                                        {index + 1}. {prod.prodName} ({prod.prodQty} @Rp{prod.prodPrice}) = Rp{prod.prodQty * prod.prodPrice}
                                                    </li>
                                                </ol>
                                            ))}    
                                            </p>
                                        </div>
                                        <div className="relative pt-6 px-6 flex-auto">
                                            <p className="mb-2 text-lg font-semibold leading-relaxed">
                                                Pembayaran
                                            </p>
                                            <p className="mb-2 text-slate-500 leading-relaxed">
                                                {item.payment.map((pay, index) => (
                                                    <div key={index}>
                                                        <p>Bank : {pay.bank}</p>
                                                        <p>Total Pembayaran : Rp{pay.total} </p>
                                                        <p>Sudah Dibayarkan : Rp{pay.total}</p>
                                                    </div>
                                                ))}
                                            </p>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="mb-2 text-lg font-semibold leading-relaxed">
                                                SKPA
                                            </p>
                                            <p className="mb-2 text-blue-600 leading-relaxed">
                                                <a href={item.Link}>{item.Link}</a>
                                            </p>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}

                </div>
            ))}
        </div>
    )
}

const items = [
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        status: "UPCOMING",
        personCharge: "Agung Prayogi",
        product: [
            {
                prodName: "Mic 18 Watt",
                prodQty: 4,
                prodPrice: 20000,
                // prodTotal: 80000
            },
            {
                prodName: "Speaker",
                prodQty: 2,
                prodPrice: 50000,
                // prodTotal: 100000
            }
        ],
        payment: [
            {
                bank: "BRI",
                total: "600000"
            }
        ],
        Link: "https"
    },
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        status: "UPCOMING",
        personCharge: "Agung Prayogi",
        product: [
            {
                prodName: "Mic 18 Watt",
                prodQty: 4,
                prodPrice: 20000,
                // prodTotal: 80000
            },
            {
                prodName: "Speaker",
                prodQty: 2,
                prodPrice: 50000,
                // prodTotal: 100000
            }
        ],
        payment: [
            {
                bank: "BRI",
                total: "600000"
            }
        ],
        Link: "https"
    },
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        status: "UPCOMING",
        personCharge: "Agung Prayogi",
        product: [
            {
                prodName: "Mic 18 Watt",
                prodQty: 4,
                prodPrice: 20000,
                // prodTotal: 80000
            },
            {
                prodName: "Speaker",
                prodQty: 2,
                prodPrice: 50000,
                // prodTotal: 100000
            }
        ],
        payment: [
            {
                bank: "BRI",
                total: "600000"
            }
        ],
        Link: "https"
    },
    {
        rent_start: "23/03/2022",
        name: "latif",
        address: "Tawakal Street No. 27, Jakarta",
        rent_end: "30/03/2022",
        status: "UPCOMING",
        personCharge: "Agung Prayogi",
        product: [
            {
                prodName: "Mic 18 Watt",
                prodQty: 4,
                prodPrice: 20000,
                // prodTotal: 80000
            },
            {
                prodName: "Speaker",
                prodQty: 2,
                prodPrice: 50000,
                // prodTotal: 100000
            }
        ],
        payment: [
            {
                bank: "BRI",
                total: "600000"
            }
        ],
        Link: "https"
    },
]

export default Returned