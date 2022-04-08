import { Link } from "react-router-dom";

const Navigation = () => {
   return(
      <div className="navigation">
         <ul className="menu">
            <li className="menu--item">
               <Link to="/">
                  <span>Home</span>
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default Navigation;