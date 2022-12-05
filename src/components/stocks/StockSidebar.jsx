import { Link } from "react-router-dom";

function StockSidebar(){
    return(
        <aside class="w-56 mr-5" aria-label="Sidebar">
            <div class="overflow-y-auto px-3">
                <ul class="space-y-2">
                    <li>
                        <Link to="/stock/categories" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700">
                            <span class="ml-1 font-semibold text-lg">Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stock/produts" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-1 font-semibold text-lg">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stock/add-product" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="ml-1 font-semibold text-lg">Add Product</span>
                        </Link>
                    </li>
                </ul>
            </div>  
        </aside>
    )
}

export default StockSidebar;