import "./../index.css";
import { Link } from "react-router-dom";
// import NavRegist from "./NavRegist";
import NavDashboard from "./NavDashboard";
import logo from "./../asset/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="Navbar flex justify-between">
        <section className="flex">
          <Link to="/">
            <img src={logo} className="h-10" alt="logo-alt" />
          </Link>
          <ul className="flex m-3 ml-12 text-xs font-semibold gap-8">
            <li>
              <Link to="/user">USERS</Link>
            </li>
            <li>
              <Link to="/stock">STOCKS</Link>
            </li>
            <li>
              <Link to="/order">ORDERS</Link>
            </li>
          </ul>
        </section>
        <section className="flex gap-3 m-1">
          {/* <NavRegist /> */}
          <NavDashboard />
          {/* Setelah regist, NavRegist akan berganti ke username customer */}
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
