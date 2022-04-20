import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Main() {
   const { todos } = useContext(TodoContext);
   const noitems = <p className="no-items">There are no items in your list</p>

   return(
      <main className="main">
         <div className="container">
            { (todos.length > 0) ? todos : noitems }
         </div>
      </main>
   );
};

export default Main;