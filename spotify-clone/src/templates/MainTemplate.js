//used components
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import Shelf from "../components/Shelf";

const MainTemplate = () => {
   return (
      <div id="main-template">
         <div className="side-view">
            <Navigation />
         </div>
         <div className="main-view">
            <div className="gradient-background"></div>
            <TopBar />
            <section className="main-content-view">
               <Shelf />
            </section>
         </div>
      </div>
   );
};

export default MainTemplate;