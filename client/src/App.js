import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// custom components/pages
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemsDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:item" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
