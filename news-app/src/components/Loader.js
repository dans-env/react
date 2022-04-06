
//files used
import loadingGif from "../files/images/loading.png";

function Loader() {
   return(
      <div className="loader">
         <div className="loader--container">
            <img className="loading-image" src={loadingGif} alt="Loading animation" />
            <h2 className="loading-text">Awaiting articles</h2>
         </div>
      </div>
   )
}

export default Loader;