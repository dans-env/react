function BackgroundChange() {

   const changeBackground = (event) => {
      const backgroundElement = document.querySelector(".body");
      const elementClass = event.target.classList.value;
      
      if(elementClass === "abstract") {
        backgroundElement.classList.remove(backgroundElement.classList[1]);
        backgroundElement.classList.add("abstract");
        return;
      }

      if(elementClass === "buildings") {
         backgroundElement.classList.remove(backgroundElement.classList[1]);
         backgroundElement.classList.add("buildings");
         return;
      }

      if(elementClass === "mountain") {
         backgroundElement.classList.remove(backgroundElement.classList[1]);
         backgroundElement.classList.add("mountain");
         return;
      }
   };

   return(
      <>
         <div className="change-background">
            <span className="background-icon"></span>
            <div className="background-list">
               <ul>
                  <li className="abstract" onClick={changeBackground}>Abstract</li>
                  <li className="buildings" onClick={changeBackground}>Building</li>
                  <li className="mountain" onClick={changeBackground}>Mountain</li>
               </ul>
            </div>
         </div>
      </>
   );
};

export default BackgroundChange;