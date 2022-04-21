import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Todo(props) {
   const { todos, setTodos } = useContext(TodoContext);
   
   const deleteTodo = (event) => {
      const name = event.target.parentNode.parentNode.getAttribute("name");
      setTodos(prevTotos => prevTotos.filter(todo => todo.props.name !== name));
   };

   return(
      <div className="todo-item" name={props.name}>
         <p contentEditable={true} suppressContentEditableWarning={true}>Edit me!</p>
         <div className="icons-container">
            <span className="edit"></span>
            <span className="bin" onClick={deleteTodo}></span>
         </div>
      </div>
   );
};

export default Todo;