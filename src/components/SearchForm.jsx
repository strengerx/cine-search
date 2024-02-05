import { useContext } from "react"
import SearchKeyContext from "../context/SearchKeyContext"

const SearchForm = () => {
      const { searchKey, setSearchKey } = useContext(SearchKeyContext)
      return (<>
            <form className='sm:w-full sm:h-full border sm:border-none rounded-sm mt-5 mx-5 sm:m-0 flex' onSubmit={e => e.preventDefault()}>
                  <input className="text-slate-300 font-syne text-sm font-semibold uppercase w-full h-full bg-transparent outline-none p-2" type="text" placeholder="Search Movies" value={searchKey} onChange={e => setSearchKey(e.target.value)} />
                  <button type='submit' className='px-5 bg-slate-700 font-syne uppercase font-semibold text-sm text-slate-300'>Search</button>
            </form>
      </>)
}

export default SearchForm