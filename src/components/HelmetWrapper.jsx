import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setSEOData } from "../redux/reducers/seoReducer";
import { getApi } from "../services/axiosInterceptors";

const HelmetWrapper = () => {
  const [Loading, setLoader] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const seoData = useSelector((state) => state.seo);
  const element = document.getElementById("toplocation");

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  const fetchData = async () => {
    setLoader(true);
    await getApi(
      `seo/page?page=${
        location.pathname === "/" ? "/" : location.pathname.replace(/\//g, "")
      }`
    )
      .then((response) => {
        setLoader(false);
        dispatch(setSEOData(response.data.data));
      })
      .catch((error) => setLoader(false));
    // Update Redux state with the fetched SEO data
  };
  // Simulate fetching SEO data on component mount and whenever the location changes
  useEffect(() => {
    fetchData();
  }, [location.pathname]);
  return (
    !Loading && (
      <Helmet>
        <title>{seoData?.data?.title || "Maharashtra Legislature Secretariat Information Portal"}</title>
        <meta
          name="description"
          content={seoData?.data?.description || "Maharashtra Legislature Secretariat Information Portal"}
        />
        {/* Add other meta tags as needed */}
      </Helmet>
    )
  );
};

export default HelmetWrapper;
