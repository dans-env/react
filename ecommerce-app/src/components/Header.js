//component imports
import Logo from "./Logo";
import WelcomeMessage from "./WelcomeMessage";
import HeaderLinks from "./HeaderLinks";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
   return(
      <header className="header">
         <div className="header-top--container">
            <div className="welcome-message">
               <WelcomeMessage />
            </div>
            <div className="header-links">
               <HeaderLinks />
            </div>
         </div>
         <div className="header-middle--container">
            <div className="nav">
               <div className="header-logo">
                  <Logo />
               </div>
               <div className="header-navigation">
                  <Navigation />
               </div>
            </div>
            <div className="seach">
               <Search />
            </div>
         </div>
      </header>
   );
};

export default Header;