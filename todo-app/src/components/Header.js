import Logo from "./Logo";
import Button from "./Button";

function Header() {
   return(
      <header className="header">
         <Logo />
         <div className="add-todo">
            <Button
               buttonClass="add-todo-button"
               buttonText="+"
            />
         </div>
      </header>
   );
};

export default Header;