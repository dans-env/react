
export const news = async () => {
   const responce = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
   );
   const data = await responce.json();
   return data;
}