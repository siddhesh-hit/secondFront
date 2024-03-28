const HighlightSentence = ({ data = "", search = "", }) => {
  if (typeof search !== "string" || !search.trim()) {
    return <span>{data}</span>;
  }

  // const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${search.trim()})`, "gi");

  const parts = data.split(regex);

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
