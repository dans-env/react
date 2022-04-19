function Button(props) {
   const handleOnclick = () => {
      alert("Button was clicked");
   };

   return(
      <button className={props.buttonClass} onClick={handleOnclick}>{props.buttonText}</button>
   );
};

export default Button;