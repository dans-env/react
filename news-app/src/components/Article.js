import { useEffect } from "react";
import defaultImage from "../assets/images/default-image.png";

const Article = props => {
   return(
      <div className="article">
         <div className="picture">
            {(props.picture) ? <img src={props.picture} alt="Article picture" /> : <img src={defaultImage} alt="Article picture" />}
            <span className="source">{props.source}</span>
         </div>
         <div className="info">
            <div className="title">
               <h2>{props.title}</h2>
            </div>
            <div className="text">
               <p>{props.description}</p>
            </div>
            <div className="buttons">
               <a className="button" href={props.link} target="_blank">View post</a>
            </div>
         </div>
      </div>
   )
}

export default Article;