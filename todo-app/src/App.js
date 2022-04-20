import { useState } from "react";
import { TodoContext } from "./contexts/TodoContext";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-container">
      <TodoContext.Provider value={{todos, setTodos}}>
        <Header />
        <Main />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
