
//files used
import logo from "../files/images/app-logo.png"; 

function Header() {
   return(
      <header className="header">
         <div className="header--container">
            <div className="logo">
               <img src={logo} alt="news app logo" />
            </div>
         </div>
      </header>
   );
}

export default Header;