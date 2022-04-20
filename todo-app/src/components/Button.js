import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import Todo from "./Todo";

function Button(props) {
   const [keyValue, setKeyValue] = useState(0);
   const { setTodos } = useContext(TodoContext);

   const handleOnclick = () => {
      setKeyValue(prevKeyValue => prevKeyValue + 1);
      setTodos(prevTodos => [...prevTodos, <Todo key={keyValue} />]);
   };

   return(
      <button className={props.buttonClass} onClick={handleOnclick}>{props.buttonText}</button>
   );
};

export default Button;