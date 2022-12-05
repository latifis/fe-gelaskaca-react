import { Link } from "react-router-dom";

function VoucherSidebar(){
    return(
        <aside class="w-56 mr-5" aria-label="Sidebar">
            <div class="overflow-y-auto px-3">
                <ul class="space-y-2">
                    <li>
                        <Link to="/voucher/list" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700">
                            <span class="ml-1 font-semibold text-lg">All Vouchers</span>
                        </Link>
                        <Link to="/voucher/add-voucher" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700">
                            <span class="ml-1 font-semibold text-lg">Add Voucher</span>
                        </Link>
                    </li>
                </ul>
            </div>  
        </aside>
    )
}

export default VoucherSidebar;