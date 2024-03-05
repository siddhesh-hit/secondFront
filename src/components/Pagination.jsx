function PaginationComponent({
  currentPage = 0,
  setCurrentPage,
  totalCount = 10,
  pageLimit = 10,
}) {
  const totalPages = Math.ceil(totalCount / pageLimit);

  console.log(totalPages);

  // Function to determine which page numbers to display
  const getPageNumbersToShow = () => {
    const pagesToShow = [];
    const numPagesToShow = 2; // Number of page numbers to show on each side of the current page

    // Add the first page
    pagesToShow.push(0);

    if (totalPages <= numPagesToShow) {
      // If total pages is less than the number of pages to show on each side plus 1
      for (let i = 1; i < totalPages; i++) {
        pagesToShow.push(i);
      }
      return pagesToShow;
    } else {
      // If total pages is greater than the number of pages to show on each side plus 1
      // Determine which pages to show based on the current page
      if (currentPage <= numPagesToShow) {
        for (let i = 1; i <= numPagesToShow * 2 + 1; i++) {
          pagesToShow.push(i);
        }
        pagesToShow.push("...");
      } else if (currentPage >= totalPages - numPagesToShow - 1) {
        pagesToShow.push("...");
        for (
          let i = totalPages - numPagesToShow * 2 - 2;
          i < totalPages - 1;
          i++
        ) {
          pagesToShow.push(i);
        }
      } else {
        pagesToShow.push("...");
        for (
          let i = currentPage - numPagesToShow;
          i <= currentPage + numPagesToShow;
          i++
        ) {
          pagesToShow.push(i);
        }
        pagesToShow.push("...");
      }
    }

    // Add the last page
    pagesToShow.push(totalPages - 1);

    return pagesToShow;
  };

  return (
    <div className="flex-tab">
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((current) => Math.max(current - 1, 0))}
        >
          ≪
        </button>
        {getPageNumbersToShow().map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCurrentPage(typeof item === "number" ? item : currentPage + 1)
            }
            className={`${
              typeof item === "number" && item === currentPage ? "active " : ""
            } paginationnn pagess`}
          >
            <span>{typeof item === "number" ? item + 1 : item}</span>
          </div>
        ))}
        <button
          onClick={() =>
            setCurrentPage((current) => Math.min(current + 1, totalPages - 1))
          }
        >
          ≫
        </button>
      </div>
    </div>
  );
}

export default PaginationComponent;
