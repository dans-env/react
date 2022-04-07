import { Link } from "react-router-dom";

const Banner = () => {
   return(
      <div className="banner">
         <div className="banner--container">
            <div className="banner-information">
               <div className="banner-information--container">
                  <h3 className="banner-title">Banner heading</h3>
                  <p className="banner-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link className="banner-link" to="/"><span>View more.</span></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;