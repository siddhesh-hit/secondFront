// function PaginationComponent({
//   currentPage = 0,
//   setCurrentPage,
//   totalCount = 10,
//   pageLimit = 10,
// }) {
//   const totalPages = Math.ceil(totalCount / pageLimit);

//   // console.log(totalPages);

//   // Function to determine which page numbers to display
//   const getPageNumbersToShow = () => {
//     const pagesToShow = [];
//     const numPagesToShow = 2; // Number of page numbers to show on each side of the current page

//     // Add the first page
//     pagesToShow.push(0);

//     if (totalPages <= numPagesToShow) {
//       // If total pages is less than the number of pages to show on each side plus 1
//       for (let i = 1; i < totalPages; i++) {
//         pagesToShow.push(i);
//       }
//       return pagesToShow;
//     } else {
//       // If total pages is greater than the number of pages to show on each side plus 1
//       // Determine which pages to show based on the current page
//       if (currentPage <= numPagesToShow) {
//         for (let i = 1; i <= numPagesToShow * 2 + 1; i++) {
//           pagesToShow.push(i);
//         }
//         pagesToShow.push("...");
//       } else if (currentPage >= totalPages - numPagesToShow - 1) {
//         pagesToShow.push("...");
//         for (
//           let i = totalPages - numPagesToShow * 2 - 2;
//           i < totalPages - 1;
//           i++
//         ) {
//           pagesToShow.push(i);
//         }
//       } else {
//         pagesToShow.push("...");
//         for (
//           let i = currentPage - numPagesToShow;
//           i <= currentPage + numPagesToShow;
//           i++
//         ) {
//           pagesToShow.push(i);
//         }
//         pagesToShow.push("...");
//       }
//     }

//     // Add the last page
//     pagesToShow.push(totalPages - 1);

//     return pagesToShow;
//   };

//   return (
//     <div className="flex-tab">
//       <div className="pagination">
//         <button
//           onClick={() => setCurrentPage((current) => Math.max(current - 1, 0))}
//         >
//           ≪
//         </button>
//         {getPageNumbersToShow().map((item, index) => (
//           <div
//             key={index}
//             onClick={() =>
//               setCurrentPage(typeof item === "number" ? item : currentPage + 1)
//             }
//             className={`${
//               typeof item === "number" && item === currentPage ? "active " : ""
//             } paginationnn pagess`}
//           >
//             <span>{typeof item === "number" ? item + 1 : item}</span>
//           </div>
//         ))}
//         <button
//           onClick={() =>
//             setCurrentPage((current) => Math.min(current + 1, totalPages - 1))
//           }
//         >
//           ≫
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PaginationComponent;


import { useState, useEffect } from "react";

const Pagination = ({ totalCount, perPage, handlePageChange, initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const numberOfPages = Math.floor(totalCount / perPage);
  const pageToShow = 5;
  const displayPage = [];

  const countPagesToShow = () => {
    if (numberOfPages <= pageToShow) {
      // Show all pages if total pages are less than or equal to the display limit
      for (let i = 0; i <= numberOfPages; i++) {
        displayPage.push(i);
      }
    } else {
      const lastPage = numberOfPages;

      if (currentPage <= pageToShow / 2 + 1) {
        // Show first few pages and ellipses
        for (let i = 0; i <= pageToShow; i++) {
          displayPage.push(i);
        }
        displayPage.push("...");
        displayPage.push(lastPage);
      } else if (currentPage >= numberOfPages - pageToShow / 2) {
        // Show last few pages and ellipses
        displayPage.push(0); // Show the first page
        displayPage.push("...");
        for (
          let i = Math.max(lastPage - pageToShow + 1, 2);
          i <= lastPage;
          i++
        ) {
          displayPage.push(i);
        }
      } else {
        displayPage.push(0); // Show the first page
        displayPage.push("...");
        for (
          let i = Math.max(currentPage - Math.floor(pageToShow / 2), 2);
          i <= Math.min(currentPage + Math.floor(pageToShow / 2), lastPage - 1);
          i++
        ) {
          displayPage.push(i);
        }
        displayPage.push("...");
        displayPage.push(lastPage); // Show the last page
      }
    }
    return displayPage;
  };

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  const handleClick = (page) => {
    console.log(numberOfPages, page);

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
      // Adjust condition

      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageLinks = () => {
    return countPagesToShow().map((page, index) => (
      <span
        className={`${page === currentPage ? "active" : "inactive"}`}
        key={index}
        onClick={() => handleClick(page)}
      >
        {page === "..." ? page : page + 1}
      </span>
    ));
  };

  console.log(initialPage)

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
