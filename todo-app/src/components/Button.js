import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../contexts/TodoContext";

function Button(props) {
   const { setTodos } = useContext(TodoContext);
   const handleOnclick = () => {
      setTodos("Hello");
   };

   return(
      <button className={props.buttonClass} onClick={handleOnclick}>{props.buttonText}</button>
   );
};

export default Button;