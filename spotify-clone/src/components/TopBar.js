//used components
import Button from "./Button";

const TopBar = () => {
   return(
   <div className="top-bar">
      <div className="navigation-buttons">
         <Button class="prev" text="Previous page"/>
         <Button class="next" text="Next page" />
      </div>
      <div className="auth-buttons">
         <Button class="register" text="Sign up" />
         <Button  class="login" text="Log in"/>
      </div>
   </div>
   );
};

export default TopBar;