import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageUrl, getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";
import { Link } from "react-router-dom";
import Arrow from "../assets/debate/arrow.svg";
import { aboutUs } from "../data/constant";
const AboutUs = () => {
  const [newData, setNewData] = useState({});
  const { lang, checkLang } = useLang();
  const fetchData = async () => {
    try {
      await getApi("mandal/active").then((res) => {
        setNewData(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="aboutuspage">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="breadcumbsss">
              <div className="countdebate">
                <Link to="/">
                  <span> Home</span>
                </Link>
                <img src={Arrow} alt="" />
                <span>{aboutUs[checkLang].title}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col lg={12}>
          <div className="aboutcontent">
            <h1>
              {aboutUs[checkLang].title}<div className="hrline"></div>
            </h1>
          </div>
        </Col>
        {
          Object.keys(newData).length > 0 &&
          newData[checkLang]["about_us"].map((section, index) => (
            <div key={index}>
              <Row
                className={`${index % 2 === 0 ? "reverse aboutcontent1" : "aboutcontent2"
                  }`}
              >
                <Col lg={6}>
                  <div
                    className={`${index % 2 === 0
                      ? "aboutvidhan aboutcontent1"
                      : "aboutvidhan aboutcontent2"
                      }`}
                  >
                    <h1>
                      {section.title}
                      <div className="hrline"></div>
                    </h1>
                    <p dangerouslySetInnerHTML={{ __html: section.description }}></p>
                    <Link target="_blank" to={ImageUrl + newData.mandal_image[index]["documents"]["destination"] + "/" + newData.mandal_image[index]["documents"]["filename"]} type="button" className="pdf-btn">
                      {aboutUs[checkLang].view} <i className="fa fa-eye"></i>
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <img src={ImageUrl + newData.mandal_image[index]["image"]["destination"] + "/" + newData.mandal_image[index]["image"]["filename"]} className="w-100" alt="about" />
                </Col>
              </Row>
              {index < newData[checkLang]["about_us"].length - 1 && <hr className="lineabcd" />}
            </div>
          ))
        }
      </Container>
    </div>
  );
};

export default AboutUs;
