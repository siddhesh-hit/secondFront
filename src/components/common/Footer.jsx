import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useLang from "../../hooks/useLang";
import { footer } from "../../data/constant";

import facebook from "../../assets/social/facebook.png";
import twitter from "../../assets/social/twitter.png";
import linkdein from "../../assets/social/linkedin.png";
import instagram from "../../assets/social/instagram.png";

const Footer = () => {
  const [location, setLocation] = useState("/");
  const { lang, checkLang } = useLang();
  const [count, setCount] = useState(0);
  const [fetched, setFetched] = useState(true);

  if (window.location.pathname !== location) {
    setLocation(window.location.pathname);
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://mlsapi.sblcorp.com/api/v1/visit", { method: "PUT" })
        .then((res) => res.json())
        .then((res) => setCount(res.data.count));
    };

    fetchData();
  }, []);

  console.log(count);

  return (
    <div>
      <div
        className={`${
          location === "/"
            ? "footer"
            : location === "/Homepage2"
            ? "otherColor12"
            : location === "/Homepage1"
            ? "newfooter"
            : location === "/Debate"
            ? "footer"
            : location === "/DebateDetails"
            ? "footer"
            : "footer" // Default value if none of the conditions are met
        }`}
      >
        <div className="firstfoot">
          <Link to="/">{footer[checkLang].title}</Link>
          <Link to="/">{footer[checkLang].title1}</Link>
        </div>
        <div className="secondfoot">
          <Link to="/">{footer[checkLang].title2}</Link>
          <Link to="/AboutUs">{footer[checkLang].title3}</Link>
          <Link to="/Library">{footer[checkLang].title4}</Link>
          <Link to="/">{footer[checkLang].title5}</Link>
          <Link to="/">{footer[checkLang].title6}</Link>
        </div>
        <div className="thirdfooter">
          <Link to="/Feedback">{footer[checkLang].title7}</Link>
          <Link to="/HelpDesk">{footer[checkLang].title8}</Link>
          <Link to="/">{footer[checkLang].title9}</Link>
          <Link to="/">{footer[checkLang].title10}</Link>
          <Link to="/">{footer[checkLang].title11}</Link>
          <Link to="/">{footer[checkLang].title12}</Link>
          <span style={{ color: "white" }}>
            {footer[checkLang].title13} : {count}
          </span>
        </div>
        <div className="sociallinks">
          <Link to="https://facebook.com/">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </Link>
          <Link to="https://in.linkedin.com/">
            <img src={linkdein} alt="linkdein" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
