import { useState, useEffect } from "react";

const useFetchMovies = ({ category, searchKey, pageCount }) => {

      const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false);


      useEffect(() => {
            const urlForSearches = `${import.meta.env.VITE_API_BASE_URL}/search/multi?query=${searchKey}&page=${pageCount}`;
            const urlForCategories = `${import.meta.env.VITE_API_BASE_URL}/movie/${category}?page=${pageCount}`;

            const url = searchKey ? urlForSearches : urlForCategories;

            const options = {
                  method: 'GET',
                  headers: {
                        accept: 'application/json',
                        Authorization: import.meta.env.VITE_API_AUTH_TOKEN
                  }
            };
            const fetchMovieAPI = async () => {
                  try {
                        setIsLoading(true);
                        const response = await (await fetch(url, options)).json();
                        setMovies(response.results);
                  } catch (e) {
                        console.log("Error fetching data " + e);
                  } finally {
                        setIsLoading(false);
                  }
            }
            fetchMovieAPI();

      }, [pageCount, category, searchKey])
      return { movies, isLoading };
}

export default useFetchMovies