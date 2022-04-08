import { Routes, Route } from "react-router-dom";

//components imported
import Header from "../components/Header";
import Footer from "../components/Footer";

//page imports
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

const MainTemplate = () => {
   return(
      <>
         <Header />

         <main className="master-wrapper">
            <div className="master-wrapper--container">
               <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="register" element={ <Register />} />
                  <Route path="login" element={ <Login /> } />
                  <Route path="cart" element={ <Cart /> } />
               </Routes>
            </div>
         </main>

         <Footer />
      </>
   );
};

export default MainTemplate;