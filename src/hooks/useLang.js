import { useEffect, useState } from "react";

const useLang = () => {
  const [lang, setLang] = useState(sessionStorage.getItem("lang") || "mr");

  useEffect(() => {
    const handleLangChange = () => {
      setLang(sessionStorage.getItem("lang"));
    };

    window.addEventListener("langChange", handleLangChange);

    // Cleanup
    return () => {
      window.removeEventListener("langChange", handleLangChange);
    };
  }, []);

  const checkLang = lang === "mr" ? "marathi" : "english";

  return { lang, checkLang };
};

export default useLang;
