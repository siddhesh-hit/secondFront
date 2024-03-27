import { useState, useEffect } from "react";

const Pagination = ({ totalCount, perPage, handlePageChange, initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const numberOfPages = Math.ceil(totalCount / perPage);
  const pageToShow = 5;
  const displayPage = [];

  const countPagesToShow = () => {
    if (numberOfPages <= pageToShow) {
      for (let i = 0; i < numberOfPages; i++) {
        displayPage.push(i);
      }
    } else {
      const lastPage = numberOfPages;

      if (currentPage < pageToShow / 2 + 1) {
        for (let i = 0; i < pageToShow; i++) {
          displayPage.push(i);
        }
        displayPage.push("...");
        displayPage.push(lastPage - 1);
      } else if (currentPage >= numberOfPages - pageToShow / 2) {
        displayPage.push(0);
        displayPage.push("...");
        for (
          let i = Math.max(lastPage - pageToShow + 1, 2);
          i < lastPage;
          i++
        ) {
          displayPage.push(i);
        }
      } else {
        displayPage.push(0);
        displayPage.push("...");
        for (
          let i = Math.max(currentPage - Math.floor(pageToShow / 2), 2);
          i < Math.min(currentPage + Math.floor(pageToShow / 2), lastPage);
          i++
        ) {
          displayPage.push(i);
        }
        displayPage.push("...");
        displayPage.push(lastPage - 1);
      }
    }
    return displayPage;
  };

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  const handleClick = (page) => {
    if (page >= 0 && page < numberOfPages + 1) {
      setCurrentPage(page);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  const goToNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log(currentPage, "in page");

  const renderPageLinks = () => {
    return countPagesToShow().map((page, index) => {
      return (
        <span
          className={`${page === +currentPage ? "active" : "inactive"}`}
          key={index}
          onClick={() => handleClick(page)}
        >
          {page === "..." ? page : page + 1}
        </span>
      );
    });
  };

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  return (
    <div className="paginationcss">
      <div className="paginationnew">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          «
        </button>
        {renderPageLinks()}
        <button
          onClick={goToNextPage}
          disabled={currentPage === numberOfPages - 1}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
