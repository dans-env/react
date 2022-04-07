
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../contexts/SearchContext";

//components used
import Loader from "./Loader";
import Article from "./Article";
import Error from "./Error";

//API
import { initialNewsData, searchedNewsData } from "../api/news";

const Main = () => {
   const { searchValue } = useContext(SearchContext);
   const [isLoading, setIsLoading] = useState(true);
   const [isLoadingClass, setIsLoadingClass] = useState("loading");
   const [articlesData, setArticlesData] = useState([]);

   const createArticles = data => {
      const articleArray = data.articles.map((article, i) => (
         <Article
            key={i}
            author={article.author}
            source={article.source.name}
            picture={article.urlToImage}
            title={article.title}
            description={article.description}
            link={article.url}
         />
      ));
      setArticlesData(articleArray);
      setIsLoadingClass("");
      setIsLoading(false);
   };

   const error = () => {
      setArticlesData(
         <Error 
            message="Sorry, we could not find articles at this moment."
         />
      )
      setIsLoading(false);
   };

   const initialData = async (createArticles, error) => {
      const data = await initialNewsData();
      (data.status === "ok") ? createArticles(data) : error();
   };

   const searchedData = async (searchValue, createArticles, error) => {
      setIsLoading(true);
      setIsLoadingClass("loading");
      const data = await searchedNewsData(searchValue);
      (data.status === "ok") ? createArticles(data) : error();
      setIsLoading(false);
      setIsLoadingClass("");
   };

   useEffect(() => {
      (searchValue) ? searchedData(searchValue, createArticles, error) : initialData(createArticles, error);
      
   }, [searchValue]);

   return(
      <main className="main">
         <div className="main--container">
            <div id="news" className={isLoadingClass}>
               {(isLoading) ? <Loader /> : articlesData }
            </div>
         </div>
      </main>
   )
}

export default Main;