import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";

const MainTemplate = () => {
   return (
      <div id="main-template">
         <div className="side-view">
            <Navigation />
         </div>
         <div className="main-view">
            <TopBar />
         </div>
      </div>
   );
};

export default MainTemplate;