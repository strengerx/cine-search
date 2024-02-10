import { useParams } from "react-router-dom"
import { useState, useContext } from 'react';
import Loading from "../components/Loading";
import Card from "../components/ui/Card";
import SearchKeyContext from "../context/SearchKeyContext";
import ChangePage from "../components/ChangePage";
import useFetchMovies from "../api/useFetchMovies";

const Content = () => {

      const { category } = useParams();
      const [pageCount, setpageCount] = useState(1);
      const { searchKey } = useContext(SearchKeyContext);

      const { movies, isLoading } = useFetchMovies({ category, searchKey, pageCount })

      return (<>

            {isLoading ?
                  <Loading />
                  :
                  <>
                        <Card movies={movies} />
                        <ChangePage pageCount={pageCount} setpageCount={setpageCount} />
                  </>
            }
      </>)
}

export default Content