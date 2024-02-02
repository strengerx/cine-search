import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Card from './Card';
import './app.css';
import Single from './Single';
import ErrorPage from './ErrorPage';

const App = () => {

      const [movies, setMovies] = useState([]);
      const [pageCount, setpageCount] = useState(1);
      const [isLoading, setIsLoading] = useState(false);
      const [toggle, setToggle] = useState(false);

      const prevPage = () => {
            if (pageCount <= 1) { setpageCount(1); return }
            setpageCount(prevPageCount => prevPageCount - 1)
      }

      const nextvPage = () => { setpageCount(pageCount + 1) }

      useEffect(() => {
            const url = `${import.meta.env.VITE_BASE_URL}/movie/top_rated?page=${pageCount}`;
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
      const asideToggleCss = { right: "0" };

      return (<>
            <main className="w-svh h-svh overflow-y-auto bg-slate-800 grid md:grid-cols-1/3.5 grid-cols-1">
                  <aside style={toggle ? asideToggleCss : {}} className="sidebar transition-all duration-500 bg-slate-950 h-full overflow-y-auto px-2 sm:static fixed right-[-350px] top-0 z-50 w-min-[350px] sm:w-auto ease-in-out">
                        <div className="h-20 flex items-center justify-center flex-col">
                              <button onClick={() => setToggle(!toggle)} className='sm:hidden text-2xl text-slate-200'>X</button>
                              <Link to='/'>
                                    <h1 className="text-slate-100 font-syne text-4xl uppercase font-bold text-center">Cine Search</h1>
                              </Link>
                        </div>
                  </aside>
                  <section className="content h-auto overflow-y-auto">
                        <header className="bg-slate-900 h-20 flex justify-between items-center px-4 sticky top-0 right-0">
                              <Link className='sm:hidden' to={"/"} >
                                    <h2 className="text-slate-100 font-syne text-2xl uppercase font-bold text-center">Cine</h2></Link>
                              <div className="hidden sm:block search-box min-w-[60%] h-10 border rounded-md bg-slate-800 border-slate-700">
                                    <input className="text-slate-300 font-syne text-sm font-semibold uppercase w-full h-full bg-transparent outline-none p-2" type="text" placeholder="Search Movies" />
                              </div>
                              <div onClick={() => setToggle(!toggle)} className="text-slate-400 w-[30px] h-[30px] rounded-full bg-transparent text-xl flex justify-center items-center cursor-pointer">
                                    <div className='w-[90%] relative h-[3px] rounded-full bg-slate-300 before:w-[85%] before:h-full before:rounded-full before:bg-slate-300 before:absolute before:top-[8px] before:content-[""] before:left-0 after:w-[85%] after:h-full after:rounded-full after:bg-slate-300 after:absolute after:top-[-8px] after:content-[""] after:left-0 before:translate-x-[-4px] after:translate-x-[-4px]'></div>
                              </div>
                        </header>
                        <div className="main-content p-4 overflow-y-auto">
                              <Routes>
                                    <Route path='/' element={<Card {...allPropsForCard} />} />
                                    <Route path='/single/:id' element={<Single isLoading={isLoading} setIsLoading={setIsLoading} />} />
                                    <Route path='*' element={<ErrorPage />} />
                              </Routes>
                        </div>

                  </section>
            </main>
      </>)
}

export default App