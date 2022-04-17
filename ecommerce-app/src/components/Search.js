const Search = () => {
   return(
      <div className="search-bar">
         <div className="search-bar--container">
            <form className="search-form">
               <input
                  className="search-input"
                  type="text"
                  name="seach-input"
                  placeholder="Search store"
               />
               <button className="search-button">Search</button>
            </form>
         </div>
      </div>
   );
};

export default Search;