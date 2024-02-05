import { Link } from "react-router-dom"
import posterNotFound from "../../assets/images/notfound.png";
const Card = ({ movies }) => {
      return (<>
            <div className="w-full align-middle grid grid-cols-2 md:grid-cols-6 gap-4">
                  {movies && movies.map(movie => (
                        <div key={movie.id} className="card max-w-md mx-auto bg-slate-900 rounded overflow-hidden shadow-lg">
                              <Link to={`single/${movie.id}`}>
                                    <img className="w-full aspect-2/3 object-cover" src={
                                          movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : posterNotFound} alt={movie.original_title} />
                              </Link>
                              <div className="p-4">
                                    <h2 className="text-slate-100 text-base font-semibold mb-2 font-syne">{movie.original_title}</h2>
                                    <Link to={`single/${movie.id}`} className="text-blue-600 font-syne uppercase font-semibold text-xs">Read more</Link>
                              </div>
                        </div>
                  ))}

            </div>
      </>)
}

export default Card