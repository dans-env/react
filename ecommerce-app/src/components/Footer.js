//component imports
import Social from "./Social";

const Footer = () => {
   return(
      <footer className="footer">
         <div className="footer-top--container">
            <div className="footer-col">
               <div className="title">
                  <h5>Information</h5>
               </div>
               <ul className="list">
                  <li>List item</li>
                  <li>List item</li>
                  <li>List item</li>
                  <li>List item</li>
               </ul>
            </div>
            <div className="footer-col">
               <div className="title">
                  <h5>Customer Services</h5>
               </div>
               <ul className="list">
                  <li>List item</li>
                  <li>List item</li>
               </ul>
            </div>
            <div className="footer-col">
               <div className="title">
                  <h5>Account</h5>
               </div>
               <ul className="list">
                  <li>List item</li>
                  <li>List item</li>
                  <li>List item</li>
               </ul>
            </div>
            <div className="footer-col social">
               <div className="title">
                  <h5>Social</h5>
               </div>
               <Social />
            </div>
         </div>
         <div className="footer-bottom--container">
            <p>Fun little ecommerce system</p>
            <p>Built by <span className="orange bold">Dan Anderson</span></p>
         </div>
      </footer>
   );
};

export default Footer;