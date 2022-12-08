import { Link } from "react-router-dom";

function PaymentSidebar(){
    return(
        <aside class="w-56 mr-5" aria-label="Sidebar">
            <div class="overflow-y-auto px-3">
                <ul class="space-y-2">
                    <li>
                        <Link to="/payment/list" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700">
                            <span class="ml-1 font-semibold text-lg">All Payments</span>
                        </Link>
                        <Link to="/payment/approval" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700">
                            <span class="ml-1 font-semibold text-lg">Approval</span>
                        </Link>
                        <Link to="/payment/approve" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700">
                            <span class="ml-1 font-semibold text-lg">Approved</span>
                        </Link>
                    </li>
                </ul>
            </div>  
        </aside>
    )
}

export default PaymentSidebar;