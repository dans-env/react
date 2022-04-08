import { useContext } from "react";

//context imports
import { UserContext } from "../contexts/UserContext";

const WelcomeMessage = () => {
   const { userLoggedIn } = useContext(UserContext);

   return(
      (userLoggedIn) ? <p>Welcome back, Dan</p> : <p>You are currently signed out</p>
   );
};

export default WelcomeMessage;