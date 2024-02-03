import { useState } from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Content from './Content';
import './app.css';
import Single from './Single';
import ErrorPage from './ErrorPage';
import Hero from './Hero';

const App = () => {

      const [toggle, setToggle] = useState(false);

      const asideToggleCss = { right: "0" };
      const playableCatagory = [
            { path: "top_rated", name: "Top Rated" },
            { path: "popular", name: "popular" },
            { path: "now_playing", name: "now playing" },
            { path: "upcoming", name: "upcoming" },
      ]

      return (<>
            <main className="w-svh h-svh overflow-y-auto bg-slate-800 grid md:grid-cols-1/3.5 grid-cols-1">
                  <aside style={toggle ? asideToggleCss : {}} className="sidebar transition-all duration-500 bg-slate-950 h-full overflow-y-auto px-2 sm:static fixed right-[-350px] top-0 z-50 w-min(90%,350px) sm:w-auto ease-in-out">
                        <div className="h-20 flex items-center justify-center flex-col">
                              <div className="sm:hidden flex justify-start w-full px-5 h-20 items-center">
                                    <button onClick={() => setToggle(!toggle)} className=' text-3xl text-slate-300 capitalize font-semibold'><i className="fa-solid fa-xmark"></i></button>
                              </div>
                              <Link className='hidden sm:block' to='/'>
                                    <h1 className="text-slate-100 font-syne text-4xl uppercase font-bold text-center">Cine Search</h1>
                              </Link>
                        </div>
                        <div className="w-full min-h-[80svh] flex flex-col items-end sm:items-start justify-start gap-4 text-slate-300 px-5 py-5">
                              {playableCatagory && playableCatagory.map((cate, key) => (
                                    <div key={key}><Link onClick={() => setToggle(false)} className='uppercase font-semibold text-base' to={`/movie/${cate.path}`} >{cate.name}</Link></div>
                              ))}
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
                                    <div className='w-[90%] relative h-[4px] rounded-full bg-slate-300 before:w-[85%] before:h-full before:rounded-full before:bg-slate-300 before:absolute before:top-[8px] before:content-[""] before:left-0 after:w-[85%] after:h-full after:rounded-full after:bg-slate-300 after:absolute after:top-[-8px] after:content-[""] after:left-0 before:translate-x-[-4px] after:translate-x-[-4px]'></div>
                              </div>
                        </header>
                        <div className="main-content p-4 overflow-y-auto">
                              <Routes>
                                    <Route path='/' element={<Hero />} />
                                    <Route path='/movie'>
                                          <Route path=':category' element={<Content />} />
                                          <Route path=':category/single/:id' element={<Single />} />
                                    </Route>
                                    <Route path='*' element={<ErrorPage />} />
                              </Routes>
                        </div>
                  </section>
            </main>
      </>)
}

export default App