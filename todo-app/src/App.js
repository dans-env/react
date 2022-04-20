import { useContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { TodoContext } from "./contexts/TodoContext";

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
