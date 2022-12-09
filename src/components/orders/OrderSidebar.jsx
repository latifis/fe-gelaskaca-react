import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function OrderSidebar() {
	const [profile, setProfile] = useState(false);

	return (
		<aside class="w-56 mr-5" aria-label="Sidebar">
			<div class="overflow-y-auto px-3">
				<ul class="space-y-2">
					<li>
						<Link
							to="/order/rental"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700"
						>
							<div class="relative inline-block text-left">
								<div>
									<button
										type="button"
										class="inline-flex w-full ml-1 font-semibold text-lg"
										id="menu-button"
										aria-expanded="true"
										aria-haspopup="true"
										onClick={() => {
											setProfile(!profile);
										}}
									>
										All Rentals
										<svg
											class="h-5 w-5 ml-2 mt-1"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</div>
								<div
									className={profile ? "" : "hidden"}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="menu-button"
									tabindex="-1"
								>
									<div class="py-1" role="none">
										<Link
											to="/order/rental/upcoming"
											class="text-gray-600 block px-6 py-2 text-sm hover:text-black"
											role="menuitem"
											tabindex="-1"
											id="menu-item-0"
										>
											Upcoming
										</Link>
										<Link
											to="/order/rental/completed"
											class="text-gray-600 block px-6 py-2 text-sm hover:text-black"
											role="menuitem"
											tabindex="-1"
											id="menu-item-1"
										>
											Completed
										</Link>
										<Link
											to="/order/rental/cancelled"
											class="text-gray-600 block px-6 py-2 text-sm hover:text-black"
											role="menuitem"
											tabindex="-1"
											id="menu-item-1"
										>
											Cancelled
										</Link>
									</div>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to="/order/returned"
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700"
						>
							<span class="ml-1 font-semibold text-lg">Returned Rentals</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default OrderSidebar;
