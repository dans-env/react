import { useContext, useState } from "react";

//context imports
import { UserContext } from "./contexts/UserContext";

//template imported
import MainTemplate from "./templates/MainTemplate";

const App = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <UserContext.Provider value={{userLoggedIn}}>
      <MainTemplate />
    </UserContext.Provider>
  );
};

export default App;
