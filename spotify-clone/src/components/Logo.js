import logo from '../assets/icons/logo.svg';

const Logo = () => {
   return(
      <div className="logo-container">
         <img className="logo" src={logo} alt="Spotify logo - white" />
      </div>
   );
};

export default Logo;