
function Error(props) {
   return(
      <div className="error">
         <div className="error-container">
            <h4>{props.message}</h4>
            <p>Please try again soon</p>
         </div>
      </div>
   );
}

export default Error;