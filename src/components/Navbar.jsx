import "./../index.css";
import { Link } from "react-router-dom";
// import NavRegist from "./NavRegist";
import NavDashboard from "./NavDashboard";
import logo from "./../asset/logo-M.png";

function Navbar() {
  return (
    <div>
      <nav className="Navbar flex justify-between">
        <section className="flex">
          <Link to="/">
            <img src={logo} className="h-10" alt="logo-alt" />
          </Link>
          <ul className="flex m-5 ml-12 text-xs font-semibold gap-8">
            <li>
              <Link to="/users">USER</Link>
            </li>
            <li>
              <Link to="/product">PRODUCT</Link>
            </li>
            <li>
              <Link to="/order">ORDER</Link>
            </li>
            <li>
              <Link to="/voucher">VOUCHER</Link>
            </li>
            <li>
              <Link to="/payment">PAYMENT</Link>
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
