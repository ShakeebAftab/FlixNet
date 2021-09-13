export const FetchURIs = [
  {
    title: `Trending Now`,
    uri: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
  },
  {
    title: `Netflix Originals`,
    uri: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`
  },
  {
    title: `Top Rated`,
    uri: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
  },
  {
    title: `Action Movie`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`
  },
  {
    title: `Comedy Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=35`
  },
  {
    title: `Horror Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=27`
  },
  {
    title: `Romance Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=10749`
  },
  {
    title: `Documentaries`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=99`
  }
]