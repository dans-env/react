
import { useState, useEffect } from "react";

//components used
import Loader from "./Loader";
import Article from "./Article";
import Error from "./Error";

//API files used
import { news } from "../api/news";

function Main() {

   const [isLoading, setIsLoading] = useState(true);
   const [isLoadingClass, setIsLoadingClass] = useState("loading");
   const [articlesData, setArticlesData] = useState([]);

   const createArticles = data => {
      console.log(data);
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
   }

   const error = () => {
      setArticlesData(
         <Error 
            message="Sorry, we could not find articles at this moment."
         />
      )
      setIsLoading(false);
   }

   const incomingData = async (createArticles, error) => {
      const data = await news();
      (data.status === "ok") ? createArticles(data) : error();
   }

   useEffect(() => {
      incomingData(createArticles, error);
   }, []);

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