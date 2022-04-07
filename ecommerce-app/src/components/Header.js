//component imports
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
   return(
      <header className="header">
         <div className="header--container">
            <div className="header-logo">
               <Logo />
            </div>
            <div className="header-navigation">
               <Navigation />
            </div>
         </div>
      </header>
   );
};

export default Header;