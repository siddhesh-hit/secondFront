import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LoaderComponents from "../components/LoaderComponents";
import { getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";
import { searchdetails } from "../data/constant";

const SearchDetails = () => {
  const { lang, checkLang } = useLang();
  const [search, setSearch] = useState(null);
  const [memberData, setMemberData] = useState([]);
  const [debateData, setDebateData] = useState([]);
  const [loader, setLoader] = useState(null);

  const location = useLocation();

  const fetchData = async (id) => {
    setLoader(true);

    await getApi(`member/search?id=${id}`)
      .then((res) => setMemberData(res.data.data))
      .catch((err) => console.log(err));

    await getApi(`debate/dumpSearch?id=${id}`)
      .then((res) => setDebateData(res.data))
      .catch((err) => console.log(err));

    setLoader(false);
  };

  useEffect(() => {
    const decodedSearch = decodeURIComponent(location.search);
    const params = new URLSearchParams(decodedSearch);
    const id = params.get("id");

    setSearch(id);
  }, [location]);

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search]);

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <div>
      <section className="searchdetails">
        <h3>
          <span>{searchdetails[checkLang].searchdetails}</span> : {search}
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-bordered mytable responsive-table">
                <thead>
                  <tr>
                    <th
                      style={{
                        paddingBottom: 15,
                        color: "rgb(204, 119, 34)",
                        fontSize: 20,
                        fontWeight: 600,
                        letterSpacing: "0em",
                        textAlign: "center",
                        paddingTop: 15,
                      }}
                    >
                      {searchdetails[checkLang].totaldata} - {debateData.count}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {memberData && memberData.length > 0 ? (
                    <>
                      <tr>
                        <td className="debateee">
                          {searchdetails[checkLang].memberprofile}
                        </td>
                      </tr>
                      {memberData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="post_demo_list">
                              <div className="demo_list_main">
                                <div className="demo_list">
                                  <h4>
                                    <Link
                                      to={`/member-details/${item?._id}`}
                                      target="_blank"
                                    >
                                      {item.basic_info.name +
                                        item.basic_info.surname}
                                    </Link>
                                  </h4>
                                </div>
                                <span className="demo_list_inner">
                                  <Link
                                    to={`/member-details/${item?._id}`}
                                    target="_blank"
                                  >
                                    {searchdetails[checkLang].memberdetail}
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                  <>
                    {debateData.data && debateData.data.length > 0 ? (
                      <>
                        <tr>
                          <td className="debateee">
                            {searchdetails[checkLang].debatelist}
                          </td>
                        </tr>
                        {debateData.data.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="post_demo_list">
                                <div className="demo_list_main">
                                  <div className="demo_list">
                                    <h4>
                                      <Link
                                        to={`/DebateDetails?id=${item._id}`}
                                        target="_blank"
                                      >
                                        {item.topic}
                                      </Link>
                                    </h4>
                                  </div>
                                  <span className="demo_list_inner">
                                    <Link
                                      to={`/DebateDetails?id=${item._id}`}
                                      target="_blank"
                                    >
                                      {searchdetails[checkLang].debatedetail}
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchDetails;
