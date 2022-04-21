import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Todo(props) {
   const { todos, setTodos } = useContext(TodoContext);
   
   const deleteTodo = (event) => {
      const name = event.target.parentNode.getAttribute("name");
      setTodos(prevTotos => prevTotos.filter(todo => todo.props.name !== name));
   };

   const markTodoAsComplete = (todo) => {
      todo.classList.add("checked");
      todo.style.background = "#ccc";
   };

   const unmarkTodoAsComplate = (todo) => {
      todo.classList.remove("checked");
      todo.style.backgroundImage = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
   }

   const checkTodoState = (event) => {
      const todo = event.target.parentNode.parentNode;
      (!todo.classList.contains("checked")) ? markTodoAsComplete(todo) : unmarkTodoAsComplate(todo);
   }

   return(
      <div className="todo-item" name={props.name}>
         <div className="content">
            <div className="checkbox" onClick={checkTodoState}></div>
            <p contentEditable={true} suppressContentEditableWarning={true}>Click me to edit!</p>
         </div>
         <span className="bin" onClick={deleteTodo}></span>
      </div>
   );
};

export default Todo;