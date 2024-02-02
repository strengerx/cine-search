import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Card from './Card';
import './app.css';
import Single from './Single';
import ErrorPage from './ErrorPage';

const App = () => {

      const [movies, setMovies] = useState([]);
      const [pageCount, setpageCount] = useState(1);
      const [isLoading, setIsLoading] = useState(false);

      const prevPage = () => {
            if (pageCount <= 1) { setpageCount(1); return }
            setpageCount(prevPageCount => prevPageCount - 1)
      }

      const nextvPage = () => { setpageCount(pageCount + 1) }

      useEffect(() => {
            const url = `${import.meta.env.VITE_BASE_URL}/movie/upcoming?page=${pageCount}`;
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
                        console.log("Error fetching weather " + e);
                  } finally {
                        setIsLoading(false);
                  }
            }
            fetchMovieAPI();
      }, [pageCount])

      const allPropsForCard = { isLoading, movies, nextvPage, prevPage, pageCount }

      const pageRouter = createBrowserRouter([
            {
                  path: "/",
                  element: <Card {...allPropsForCard} />,
                  errorElement: <ErrorPage />,
            },
            {
                  path: "/single/:id",
                  element: <Single isLoading={isLoading} setIsLoading={setIsLoading} />,
            }
      ])

      return (<>
            <main className="w-svh h-svh overflow-y-auto bg-slate-800 grid md:grid-cols-1/3.5 grid-cols-1">
                  <aside className="sidebar bg-slate-950 h-full overflow-y-auto px-2 hidden md:block">
                        <div className="h-20 flex items-center justify-center">
                              <a href='/'>
                                    <h1 className="text-slate-100 font-syne text-4xl uppercase font-bold text-center">Cine Search</h1>
                              </a>
                        </div>
                  </aside>
                  <section className="content h-auto overflow-y-auto">
                        <header className="bg-slate-900 h-20 flex justify-between items-center px-4 sticky top-0 right-0">
                              <div className="search-box min-w-[60%] h-10 border rounded-md bg-slate-800 border-slate-700">
                                    <input className="text-slate-300 font-syne text-sm font-semibold uppercase w-full h-full bg-transparent outline-none p-2" type="text" placeholder="Search Movies" />
                              </div>
                              <a href="/">
                                    <button className="text-slate-100">
                                          <i className="fa-brands fa-facebook"></i>
                                    </button>
                              </a>
                        </header>
                        <div className="main-content p-4 overflow-y-auto">
                              <RouterProvider router={pageRouter} />
                        </div>

                  </section>
            </main>
      </>)
}

export default App