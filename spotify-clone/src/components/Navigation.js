
//components used
import Logo from './Logo';

//icons used
import homeIcon from "../assets/icons/home.svg";
import searchIcon from "../assets/icons/search.svg";
import libuaryIcon from "../assets/icons/libuary.svg";

const Navigation = () => {
   return(
      <nav className="main-navigation">
         <Logo />
         <ul className="menu">
            <li className="item">
               <a href="#">
                  <span className="icon">
                     <img src={homeIcon} alt="home icon" />
                  </span>
                  <span className="text">Home</span>
               </a>
            </li>
            <li className="item">
               <a href="#">
                  <span className="icon">
                     <img src={searchIcon} alt="search icon" />
                  </span>
                  <span className="text">Search</span>
               </a>
            </li>
            <li className="item">
               <a href="#">
                  <span className="icon">
                     <img src={libuaryIcon} alt="Libuary icon" />
                  </span>
                  <span className="text">Your libuary</span>
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;