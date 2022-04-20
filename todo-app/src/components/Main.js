import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Main() {

   const { todos } = useContext(TodoContext);
   const noItems = <p className="no-items">No items to be done!</p>

   return(
      <main className="main">
         <div className="container">
            {(todos.length > 0) ? todos : noItems }
         </div>
      </main>
   );
};

export default Main;