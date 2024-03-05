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

  const fetchData = async () => {
    setLoader(true);
    await getApi(
      `seo/page?page=${
        location.pathname === "/"
          ? "HomePage"
          : location.pathname.replace(/\//g, "")
      }`
    )
      .then((response) => {
        setLoader(false);
        dispatch(setSEOData(response.data.data));
      })
      .catch((error) => setLoader(false));
  };

  useEffect(() => {
    fetchData();
  }, [location.pathname]);

  return (
    !Loading && (
      <Helmet>
        <title>{seoData?.data?.title || "MLS"}</title>
        <meta
          name="description"
          content={seoData?.data?.description || "Default Description"}
        />
        <meta
          name="keywords"
          content={seoData?.data?.keywords || "Default keywords"}
        />
      </Helmet>
    )
  );
};

export default HelmetWrapper;
