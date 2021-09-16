export const FetchURIs = [
  {
    title: `Trending Now`,
    uri: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
    route: 'trending'
  },
  {
    title: `Netflix Originals`,
    uri: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`,
    route: 'originals'
  },
  {
    title: `Top Rated`,
    uri: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`,
    route: 'toprated'
  },
  {
    title: `Action Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`,
    route: 'action'
  },
  {
    title: `Comedy Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=35`,
    route: 'comedy'
  },
  {
    title: `Horror Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=27`,
    route: 'horror'
  },
  {
    title: `Romance Movies`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=10749`,
    route: 'romance'
  },
  {
    title: `Documentaries`,
    uri: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=99`,
    route: 'documentaries'
  }
]