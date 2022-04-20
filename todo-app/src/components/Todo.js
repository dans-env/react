function Todo() {
   const deleteTodo = (event) => {
      const element = event.target.parentNode.parentNode;
      element.remove();
   };

   return(
      <div className="todo-item">
         <p contentEditable={true} suppressContentEditableWarning={true}>Edit me!</p>
         <div className="icons-container">
            <span className="edit"></span>
            <span className="bin" onClick={deleteTodo}></span>
         </div>
      </div>
   );
};

export default Todo;