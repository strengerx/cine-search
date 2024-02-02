import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Single = ({ isLoading, setIsLoading }) => {
      const { id } = useParams();
      const [movie, setMovie] = useState({});

      useEffect(() => {
            const url = `${import.meta.env.VITE_BASE_URL}/movie/${id}`;
            const options = {
                  method: "GET",
                  headers: {
                        accept: "application/json",
                        Authorization: import.meta.env.VITE_API_AUTH_TOKEN,
                  },
            };
            const fetchMovieAPI = async () => {
                  try {
                        setIsLoading(true);
                        const response = await (await fetch(url, options)).json();
                        setMovie(response);
                  } catch (e) {
                        console.log("Error fetching weather " + e);
                  } finally {
                        setIsLoading(false);
                  }
            };
            fetchMovieAPI();
      }, [id, setIsLoading]);

      return (
            <>
                  {isLoading ?
                        <div className="flex w-full h-[80svh] justify-center items-center">
                              <h6 className="font-syne text-xl font-semibold text-slate-400">Loading...</h6>
                        </div>
                        :
                        <div className="w-full gap-4 sm:gap-0 grid sm:grid-cols-1/1.75">
                              {movie.poster_path &&
                                    <img
                                          className="w-full aspect-2/3 object-cover"
                                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                          alt={movie.original_title}
                                    />}

                              <div className="sm:py-5 sm:px-10 font-syne">
                                    <h1 className="text-2xl font-bold mb-1 text-slate-100">
                                          {movie.original_title}
                                    </h1>
                                    {movie.genres &&
                                          movie.genres.map(genre => (
                                                <span
                                                      className="text-slate-400 text-xs mr-1 capitalize font-semibold"
                                                      key={genre.id}
                                                >
                                                      {" "}
                                                      {genre.name}{" "}
                                                </span>
                                          ))}
                                    <div className="flex mt-3 mb-2 items-center justify-between flex-wrap">
                                          <p className="text-slate-400 ">
                                                <strong className="text-slate-300">Release:</strong>{" "}
                                                <span className="ml-1 font-mono">{movie.release_date}</span>
                                          </p>
                                          <p className="text-slate-400 ">
                                                <strong className="text-slate-300">Rating:</strong>{" "}
                                                <span className="ml-1 text-base font-semibold">A</span>
                                          </p>
                                          <p className="text-slate-400 ">
                                                <strong className="text-slate-300">Runtime:</strong>{" "}
                                                <span className="ml-1 font-mono">{movie.runtime}m</span>
                                          </p>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-2">
                                          <strong className="p-.5 text-black bg-yellow-500">IMDb</strong>{" "}
                                          <span className="ml-1 font-mono text-lg font-semibold">8.5/10</span>
                                    </p>
                                    <p className="text-slate-400 mb-4">
                                          <strong className="text-slate-300">Description:</strong>{" "}
                                          {movie.overview}
                                    </p>
                                    {/* Production House Details */}
                                    <div className="border-t border-gray-300 pt-4">
                                          <h2 className="text-xl font-bold text-slate-100 mb-2">
                                                Production House Details
                                          </h2>

                                          <p className="text-slate-400 mb-2 uppercase">
                                                <strong className="text-slate-300 capitalize">
                                                      Production Company:
                                                </strong>{" "}
                                                {movie.production_companies &&
                                                      movie.production_companies.map(production => (
                                                            <span className="mr-3" key={production.id}>{production.name}</span>
                                                      ))}
                                          </p>
                                          <p className="text-slate-400  mb-2">
                                                <strong className="text-slate-300">Director:</strong> John Doe
                                          </p>
                                    </div>
                              </div>
                        </div>}
            </>
      );
};

export default Single;
