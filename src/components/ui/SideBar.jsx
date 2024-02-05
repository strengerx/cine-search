import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import { useContext } from "react";
import SearchKeyContext from "../../context/SearchKeyContext";
const SideBar = ({ toggle, setToggle }) => {

      const { setSearchKey } = useContext(SearchKeyContext)

      const asideToggleCss = { right: "0" };
      const playableCatagory = [
            { path: "popular", name: "popular" },
            { path: "upcoming", name: "upcoming" },
            { path: "top_rated", name: "Top Rated" },
            { path: "now_playing", name: "now playing" },
      ]

      const handleLinksClick = () => { setToggle(false); setSearchKey("") }

      return (<>
            <aside style={toggle ? asideToggleCss : {}} className="sidebar transition-all duration-500 bg-slate-950 h-full overflow-y-auto px-2 sm:static fixed right-[-350px] top-0 z-50 w-min(90%,350px) sm:w-auto ease-in-out">
                  <div className="h-20 flex items-center justify-center flex-col">
                        <div className="sm:hidden flex justify-start w-full px-5 h-20 items-center">
                              <button onClick={() => setToggle(!toggle)} className=' text-3xl text-slate-300 capitalize font-semibold'><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <a className="sm:block hidden" href='/'>
                              <h1 className="text-slate-100 font-syne text-4xl uppercase font-bold">Cine Search</h1>
                        </a>
                  </div>
                  <Link className="sm:hidden" to='/'>
                        <h1 className="text-slate-100 font-syne text-2xl px-5 text-start uppercase font-bold">Cine Search</h1>
                  </Link>
                  <div className="sm:hidden">
                        <SearchForm />
                  </div>
                  <div className="w-full min-h-[80svh] flex flex-col items-start justify-center gap-6 font-syne text-slate-300 px-5 py-5">
                        <div className="" ><Link onClick={() => setToggle(false)} className='capitalize font-thin text-xl' to={`/`} >Home</Link></div>
                        {playableCatagory && playableCatagory.map((cate, key) => (
                              <div className="" key={key}><Link onClick={handleLinksClick} className='capitalize font-thin text-xl' to={`/movie/${cate.path}`} >{cate.name}</Link></div>
                        ))}
                  </div>
                  <div className="social-section px-5 py-5">
                        <h6 className="text-slate-500 text-center font-syne capitalize">All Rights Reserved | © cine 2024</h6>
                  </div>
            </aside >
      </>)
}

export default SideBar