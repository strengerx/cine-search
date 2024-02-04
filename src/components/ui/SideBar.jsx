import { Link } from "react-router-dom";
const SideBar = ({ toggle, setToggle }) => {

      const asideToggleCss = { right: "0" };
      const playableCatagory = [
            { path: "top_rated", name: "Top Rated" },
            { path: "popular", name: "popular" },
            { path: "now_playing", name: "now playing" },
            { path: "upcoming", name: "upcoming" },
      ]
      return (<>
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
      </>)
}

export default SideBar