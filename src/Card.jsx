import { Link } from "react-router-dom"

const Card = ({ movies, prevPage, nextvPage, pageCount, isLoading }) => {
      return (<>

            {isLoading ?
                  <div className="flex w-full h-[80svh] justify-center items-center">
                        <h6 className="font-syne text-xl font-semibold text-slate-400">Loading...</h6>
                  </div>
                  :
                  <div>
                        <div className="w-full align-middle grid grid-cols-2 md:grid-cols-6 gap-4">
                              {movies.map(movie => (
                                    <div key={movie.id} className="card max-w-md mx-auto bg-slate-900 rounded overflow-hidden shadow-lg">
                                          <Link to={`/single/${movie.id}`}>
                                                <img className="w-full aspect-2/3 object-cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                                          </Link>
                                          <div className="p-4">
                                                <h2 className="text-slate-100 text-base font-semibold mb-2 font-syne">{movie.original_title}</h2>
                                                <Link to={`/single/${movie.id}`} className="text-blue-600 font-syne uppercase font-semibold text-xs">Read more</Link>
                                          </div>
                                    </div>
                              ))}

                        </div>
                        <div className="p-4 flex justify-center items-center gap-6">
                              {pageCount !== 1 &&
                                    <a href='#' onClick={prevPage} className='py-1 px-3 font-syne rounded-sm uppercase text-sm border border-slate-500 text-slate-100'>Prev</a>}
                              <a href='#' onClick={nextvPage} className='py-1 px-3 font-syne rounded-sm uppercase text-sm border border-slate-500 text-slate-100'>next</a>
                        </div>
                  </div>}
      </>)
}

export default Card