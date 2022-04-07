//components
import Search from "./Search";

//files
import logo from "../assets/images/app-logo.png";

const Header = () => {
   return(
      <header className="header">
         <div className="header--container">
            <div className="logo">
               <img src={logo} alt="news app logo" />
            </div>
            <div className="search">
               <Search />
            </div>
         </div>
      </header>
   );
}

export default Header;