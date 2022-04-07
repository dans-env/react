import { useState } from "react";

//template imported
import MainTemplate from "./templates/MainTemplate";

const App = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <MainTemplate />
  );
};

export default App;
