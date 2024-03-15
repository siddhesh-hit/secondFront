const HighlightSentence = ({ data = "", search = "", }) => {
  if (typeof search !== "string" || !search.trim()) {
    return <span>{data}</span>;
  }

  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Create a regular expression to match the search string globally and case-insensitively
  const regex = new RegExp(`(${escapedSearch})`, "gi");

  // Split the data into parts using the regex
  const parts = data.split(regex);
  // console.log(parts);

  return (
    <span>
      {
        parts.map((part, i) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )
      }
    </span >
  );
};

export default HighlightSentence;
