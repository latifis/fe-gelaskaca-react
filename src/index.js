import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Category from "./Category";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Confirm from "./Confirm";
import Success from "./Success";
import Approve from "./PaymentApprove";
import History from "./components/History";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

import Order from "./components/orders/Order";
import Rental from "./components/orders/rentals/IndexRental";
import Returned from "./components/orders/returneds/IndexReturned";

import Navbar from "./components/Navbar";
import Stock from "./components/stocks/Stock";
import User from "./components/users/User";

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/success" element={<Success />} />
            <Route path="/approve" element={<Approve />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />

            {/* NEW */}
            <Route path="/order" element={<Order />} />
            <Route path="/order/rental" element={<Rental />} />
            <Route path="/order/returned" element={<Returned />} />
            
            <Route path="/stock" element={<Stock />} />

            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
