import Logo from "./Logo";
import Button from "./Button";

function Header() {
   return(
      <header className="header">
         <div className="container">
            <Logo />
            <p className="stats">Some text with stats about the interface</p>
         </div>
         <div className="container">
            <Button buttonClass="add-todo" buttonText="add" />
         </div>
      </header>
   );
};

export default Header;