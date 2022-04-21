import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import Logo from "./Logo";
import Button from "./Button";

function Header() {
   const { todos, setTodos } = useContext(TodoContext);

   return(
      <header className="header">
         <div className="container">
            <Logo />
            <p className="stats">{`Total items: ${todos.length} - Items complete: 0`}</p>
         </div>
         <div className="container">
            <Button buttonClass="add-todo" buttonText="add" />
         </div>
      </header>
   );
};

export default Header;