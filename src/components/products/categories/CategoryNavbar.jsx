function CategoryNavbar(){
    return(
        <nav className="mb-5">
            <ul className="flex flex-row gap-2 text-center font-bold text-sm">
                <li id="name" className="flex-none w-56">
                    Name
                </li>
                <li id="image" className="flex-none w-96">
                    Image
                </li>
                <li id="action" className="flex-none px-5 w-56">
                    Action
                </li>
            </ul>
        </nav>
    )
}

export default CategoryNavbar;