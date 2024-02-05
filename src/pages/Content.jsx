import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react';
import Loading from "../components/Loading";
import Card from "../components/ui/Card";
import SearchKeyContext from "../context/SearchKeyContext";


const Content = () => {

      const [movies, setMovies] = useState([]);
      const [pageCount, setpageCount] = useState(1);
      const [isLoading, setIsLoading] = useState(false);
      const { category } = useParams();

      const prevPage = () => {
            if (pageCount <= 1) { setpageCount(1); return }
            setpageCount(prevPageCount => prevPageCount - 1)
      }

      const nextvPage = () => { setpageCount(prevPageCount => prevPageCount + 1) }
      const { searchKey } = useContext(SearchKeyContext);


      useEffect(() => {
            const url = searchKey ? `${import.meta.env.VITE_API_BASE_URL}/search/movie?query=${searchKey}&page=${pageCount}` : `${import.meta.env.VITE_API_BASE_URL}/movie/${category}?page=${pageCount}`;
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

      return (<>

            {isLoading ?
                  <Loading />
                  :
                  <>
                        <Card movies={movies} />
                        <div className="p-4 flex justify-center items-center gap-6">
                              {pageCount !== 1 &&
                                    <a href='#' onClick={prevPage} className='py-1 px-3 font-syne rounded-sm uppercase text-sm border border-slate-500 text-slate-100'>Prev</a>}
                              <a href='#' onClick={nextvPage} className='py-1 px-3 font-syne rounded-sm uppercase text-sm border border-slate-500 text-slate-100'>next</a>
                        </div>
                  </>
            }
      </>)
}

export default Content