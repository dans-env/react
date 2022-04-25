import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";

const MainTemplate = () => {
   return (
      <div id="main-template">
         <div className="side-view">
            <Navigation />
         </div>
         <div className="main-view">
            <div className="gradient-background"></div>
            <TopBar />
         </div>
      </div>
   );
};

export default MainTemplate;