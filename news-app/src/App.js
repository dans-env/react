import { useContext, useState } from "react";
import { SearchContext } from "./contexts/SearchContext";

//used components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <div className="app">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <Main />
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
