import React from 'react'

export default function Pagination({totalPages, currentPage, onHandleCurrentPage}) {


   //handle first page
    const handleFirstChange=()=>{
            onHandleCurrentPage(1)
    }
   //handle previous page
    const handleLastChange=()=>{
            onHandleCurrentPage(totalPages)
    }
   //pagination page show
    const getVisiblePageNumber=()=>{
        const visiblePages = 5;
        const pages =[];

        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2))
        let endPage = Math.min(totalPages, startPage + visiblePages - 1)

        if(endPage - startPage < visiblePages -1){
            startPage = Math.max(1, endPage - visiblePages + 1)
        }

        for(let i=startPage; i <= endPage; i++){
            pages.push (i)
        }
        return pages
    }

    const visiblePageNumber = getVisiblePageNumber()


    //handle next page
    const handlePreviousChange=()=>{
        if(currentPage > 1){
            onHandleCurrentPage(currentPage - 1)
            console.log(currentPage)
        }
    }
    // handle last page
    const handleNextChange=()=>{
        if(currentPage < totalPages){
            onHandleCurrentPage(currentPage + 1)
            console.log(currentPage)
        }
    }
  return (
    <div>
      <div className="pagination">
        <button
          onClick={handleFirstChange}
          disabled={currentPage === 1}
          aria-label="First-page"
        >
          &laquo;&laquo;
        </button>
        <button
          onClick={handlePreviousChange}
          disabled={currentPage === 1}
          aria-label="previous-page"
        >
          &laquo;
        </button>
        {visiblePageNumber.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => onHandleCurrentPage(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={handleNextChange}
          disabled={currentPage === totalPages}
          aria-label="Next-page"
        >
          &raquo;
        </button>
        <button
          onClick={handleLastChange}
          disabled={currentPage === totalPages}
          aria-label="Last-Page"
        >
          &raquo;&raquo;
        </button>
      </div>
    </div>
  );
}
