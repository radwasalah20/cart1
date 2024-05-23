import { BrowserRouter, Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/Page404";

export default function App() {
  return(
    <div className="col-12 App">
      <BrowserRouter>
        <Routes>
          <Route path="/"> 
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="shop" >
              <Route index element={"Shop"} />
              <Route path="men" element={"men clothes"}/>
              <Route path="women" element={"women clothes"}/>
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}