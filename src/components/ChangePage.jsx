const ChangePage = ({ pageCount, setpageCount }) => {
      const prevPage = () => {
            if (pageCount <= 1) { setpageCount(1); return }
            setpageCount(prevPageCount => prevPageCount - 1)
      }

      const nextvPage = () => { setpageCount(prevPageCount => prevPageCount + 1) }
      return (<>
            <div className="p-4 flex justify-center items-center gap-6">
                  {pageCount !== 1 &&
                        <a href='#' onClick={prevPage} className='py-1 px-3 font-syne rounded-sm uppercase text-sm border border-slate-500 text-slate-100'>Prev</a>}
                  <a href='#' onClick={nextvPage} className='py-1 px-3 font-syne rounded-sm uppercase text-sm border border-slate-500 text-slate-100'>next</a>
            </div>
      </>)
}

export default ChangePage