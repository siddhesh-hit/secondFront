function PaginationComponent({
  currentPage = 0,
  setCurrentPage,
  totalCount = 10,
  pageLimit = 10,
}) {
  const totalPages = Math.ceil(totalCount / pageLimit);

  // Function to determine which page numbers to display
  const getPageNumbersToShow = () => {
    const pagesToShow = [];
    const numPagesToShow = 2; // Number of page numbers to show on each side of the current page

    // Add the first page
    pagesToShow.push(0);

    // If current page is close to the beginning
    if (currentPage <= numPagesToShow) {
      for (
        let i = 1;
        i <= currentPage + numPagesToShow && i < totalPages - 1;
        i++
      ) {
        pagesToShow.push(i);
      }
      if (totalPages > currentPage + numPagesToShow + 1) {
        pagesToShow.push("...");
      }
    }
    // If current page is close to the end
    else if (currentPage >= totalPages - numPagesToShow - 1) {
      if (totalPages > currentPage - numPagesToShow) {
        pagesToShow.push("...");
      }
      for (let i = totalPages - numPagesToShow - 1; i < totalPages - 1; i++) {
        pagesToShow.push(i);
      }
    }
    // If current page is in the middle
    else {
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
              typeof item === "number" && item === currentPage
                ? "active pagess"
                : ""
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
