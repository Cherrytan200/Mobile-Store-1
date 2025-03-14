// import React from 'react'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'
// import Home from './pages/Home.jsx'
// import { Route, Routes } from 'react-router-dom';
// import Otp from './pages/Otp.jsx'

// export default function App() {
//   return (
//     <Routes>
//       <Route path='/login' element={<Login/>} />
//       <Route path='/' element={<Home/>} />
//       <Route path='/register' element={<Register/>} />
//       <Route path='/otp' element={<Otp/>} />
//     </Routes>
//   )
// }


// import {
//   Outlet,
//   Route,
//   ScrollRestoration,
//   Routes,
// } from "react-router-dom";
// import Footer from "./components/home/Footer/Footer.jsx";
// import FooterBottom from "./components/home/Footer/FooterBottom.jsx";
// import Header from "./components/home/Header/Header.jsx";
// import HeaderBottom from "./components/home/Header/HeaderBottom.jsx";
// import SpecialCase from "./components/SpecialCase/SpecialCase.jsx";
// import About from "./pages/About/About.jsx";
// import SignIn from "./pages/Account/SignIn.jsx";
// import SignUp from "./pages/Account/SignUp.jsx";
// import Otp from "./pages/Account/Otp.jsx";
// import Cart from "./pages/Cart/Cart.jsx";
// import Contact from "./pages/Contact/Contact.jsx";
// import Home from "./pages/Home/Home.jsx";
// import Journal from "./pages/Journal/Journal.jsx";
// import Offer from "./pages/Offer/Offer.jsx";
// import Payment from "./pages/payment/Payment.jsx";
// import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
// import Shop from "./pages/Shop/Shop.jsx";

// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <HeaderBottom />
//       <SpecialCase />
//       <ScrollRestoration />
//       <Outlet />
//       <Footer />
//       <FooterBottom />
//     </div>
//   );
// };

// function App(){
//     return(
//       <Routes>
//           <Route path="/" element={<Layout />}>
//           {/* ==================== Header Navlink Start here =================== */}
//           <Route index element={<Home />}></Route>
//           <Route path="/shop" element={<Shop />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//           <Route path="/journal" element={<Journal />}></Route>
//           {/* ==================== Header Navlink End here ===================== */}
//           <Route path="/offer" element={<Offer />}></Route>
//           <Route path="/product/:_id" element={<ProductDetails />}></Route>
//           <Route path="/cart" element={<Cart />}></Route>
//           <Route path="/paymentgateway" element={<Payment />}></Route>
//           </Route>
//           <Route path="/signup" element={<SignUp />}></Route>
//           <Route path="/signin" element={<SignIn />}></Route>
//           <Route path="/otp" element={<Otp />}></Route>
//       </Routes>
//     )
// }
// export default App;


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Journal from "./pages/Journal/Journal.jsx";
import Offer from "./pages/Offer/Offer.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
// import Payment from "./pages/payment/Payment.jsx";
import SignUp from "./pages/Account/SignUp.jsx";
import SignIn from "./pages/Account/SignIn.jsx";
import Otp from "./pages/Account/Otp.jsx";

import { Outlet } from "react-router-dom";
import {ScrollRestoration} from "react-router-dom";
import Footer from "./components/home/Footer/Footer.jsx";
import FooterBottom from "./components/home/Footer/FooterBottom.jsx";
import Header from "./components/home/Header/Header.jsx";
import HeaderBottom from "./components/home/Header/HeaderBottom.jsx";
import SpecialCase from "./components/SpecialCase/SpecialCase.jsx";
import Shipping from "./pages/shipping/Shipping.jsx";
import Payment from "./pages/payment/Payment.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet /> {/* This will render the child route */}
      <Footer />
      <FooterBottom />
    </div>
  );
};


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Shipping />} />
        <Route path='/payment' element={<Payment/>}/>
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
}

export default App
