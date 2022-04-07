import { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

const Search = () => {
   const {setSearchValue} = useContext(SearchContext);
   const [inputValue, setInputValue] = useState("");

   const handleInputChange = event => setInputValue(event.target.value);

   const onFormSubmit = event => {
      event.preventDefault();
      setSearchValue(inputValue);
   };

   return(
      <form className="search-form" onSubmit={onFormSubmit}>
         <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search articles"
            value={inputValue}
            onChange={handleInputChange}
         />
         <button className="search-submit" type="submit">Search</button>
      </form>
   );
};

export default Search;