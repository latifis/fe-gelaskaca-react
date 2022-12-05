import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
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

import Product from "./components/products/Product";
import Category from "./components/products/categories/IndexCategory";
import Stock from "./components/products/stocks/IndexStock";
import AddProduct from "./components/products/add/IndexAdd";

import Navbar from "./components/Navbar";

import User from "./components/users/User";
import List from "./components/users/lists/IndexList"
import AddUser from "./components/users/add/IndexAdd"

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/product" element={<ProductDetail />} /> */}
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
            
            <Route path="/product" element={<Product />} />
            <Route path="/product/categories" element={<Category />} />
            <Route path="/product/stocks" element={<Stock />} />
            <Route path="/product/add-product" element={<AddProduct />} />

            <Route path="/users" element={<User />} />
            <Route path="/users/list" element={<List />} />
            <Route path="/users/add-user" element={<AddUser />} />

            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
