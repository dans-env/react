
function Article(props) {
   return(
      <div className="article">
         <div className="picture">
            <img src={props.picture} alt="Article picture" />
         </div>
         <div className="info">
            <div className="title">
               <h2>{props.title}</h2>
               <p>{(props.autor != "null") ? `Author: ${props.author}` : `Author: Unkown` }</p>
            </div>
            <div className="text">
               <p>{props.description}</p>
            </div>
            <div className="buttons">
               <a href={props.link} target="_blank">View</a>
            </div>
         </div>
      </div>
   )
}

export default Article;