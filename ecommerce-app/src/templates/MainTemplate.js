import { Routes, Route } from "react-router-dom";

//components imported
import Header from "../components/Header";
import Footer from "../components/Footer";

//page imports
import Home from "../pages/Home";
import Login from "../pages/Login";

const MainTemplate = () => {
   return(
      <>
         <Header />

         <main className="master-wrapper">
            <div className="master-wrapper--container">
               <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="login" element={ <Login /> } />
               </Routes>
            </div>
         </main>

         <Footer />
      </>
   );
};

export default MainTemplate;