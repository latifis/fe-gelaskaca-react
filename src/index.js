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
import CategoryEdit from "./components/products/categories/CategoryEdit";
import Stock from "./components/products/stocks/IndexStock";
import AddProduct from "./components/products/add/IndexAdd";
import AddImage from "./components/products/add/IndexAddImage";
import AddCategory from "./components/products/add/IndexAddCategory";

import Navbar from "./components/Navbar";

import User from "./components/users/User";
import ListUser from "./components/users/lists/IndexList"
import AddUser from "./components/users/add/IndexAdd"

import Voucher from "./components/vouchers/Voucher";
import ListVoucher from "./components/vouchers/lists/IndexListVoucher"
import AddVoucher from "./components/vouchers/add/IndexAddVoucher"

import Payment from "./components/payments/Payment";
import ListPayment from "./components/payments/lists/IndexListPayment"
import ListApproved from "./components/payments/Approved/IndexApproved"

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
            <Route path="/order" element={<Rental />} /> {/* route Order diganti Rental */}
            <Route path="/order/rental" element={<Rental />} />
            <Route path="/order/returned" element={<Returned />} />
            
            <Route path="/product" element={<Category />} /> {/* route Product diganti Category */}
            <Route path="/product/categories" element={<Category />} />
            <Route path="/product/categories/:id" element={<CategoryEdit />} />
            <Route path="/product/stocks" element={<Stock />} />
            <Route path="/product/add-product" element={<AddProduct />} />
            <Route path="/product/add-product-image" element={<AddImage />} />
            <Route path="/product/add-category" element={<AddCategory />} />

            <Route path="/users" element={<ListUser />} /> {/* route User diganti List */}
            <Route path="/users/list" element={<ListUser />} />
            <Route path="/users/add-user" element={<AddUser />} />

            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />

            <Route path="/voucher" element={<ListVoucher />} /> {/* route Voucher diganti ListVoucher */}
            <Route path="/voucher/list" element={<ListVoucher />} />
            <Route path="/voucher/add-voucher" element={<AddVoucher />} />
            
            <Route path="/payment" element={<ListPayment />} /> {/* route Payment diganti ListPayment */}
            <Route path="/payment/list" element={<ListPayment />} />
            <Route path="/payment/approved" element={<ListApproved />} />

          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
