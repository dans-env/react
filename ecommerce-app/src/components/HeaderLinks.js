import { Link } from "react-router-dom";

const HeaderLinks = () => {
   return(
      <ul>
         <li>
            <Link to="/register">Register</Link>
         </li>
         <li>
            <Link to="/login">Login</Link>
         </li>
         <li>
            <Link to="/cart">Cart</Link>
         </li>
      </ul>
   );
};

export default HeaderLinks;