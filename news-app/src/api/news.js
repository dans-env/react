
export const initialNewsData = async () => {
   const responce = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
   );
   const data = await responce.json();
   return data;
};

export const searchedNewsData = async (query) => {
   const responce = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
   );
   const data = await responce.json();
   return data;
};