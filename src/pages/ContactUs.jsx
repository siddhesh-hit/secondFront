import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Arrow from "../assets/debate/arrow.svg";
import useLang from "../hooks/useLang";
import { getApi } from "../services/axiosInterceptors";
import { contactUs } from "../data/constant";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [newData, setNewData] = useState({});
  const { lang, checkLang } = useLang();

  const fetchData = async () => {
    try {
      const res = await getApi("contact");
      setNewData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contactpage" style={{ fontFamily: checkLang === 'marathi' ? 'Sakal Marathi' : 'Poppins' }}>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="breadcumbsss">
              <div className="countdebate">
                <Link to="/">
                  <span> {contactUs[checkLang].home}</span>
                </Link>
                <img src={Arrow} alt="" />
                <span>{contactUs[checkLang].title}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Col lg={12}>
        <div className="contactcontent">
          <h1>
            {contactUs[checkLang].title}
            <div className="hrline"></div>
          </h1>
        </div>
      </Col>
      <Container className="mb-5 mt-5">
        {newData?.length > 0 &&
          newData.map((section, index) => (
            <Row key={index}>
              <Col lg={3}>
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text">
                    <span>{contactUs[checkLang].address}:</span>
                    <p dangerouslySetInnerHTML={{ __html: section[checkLang].address }}></p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="text">
                    <span>{contactUs[checkLang].telephone}:</span>
                    <p>
                      <a href="tel://1234567920">{section[checkLang].telephone}</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-fax" />
                  </div>
                  <div className="text">
                    <span>{contactUs[checkLang].fax}:</span>
                    <p>
                      <a href="mailto:info@yoursite.com">{section[checkLang].fax}</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane" />
                  </div>
                  <div className="text">
                    <span>{contactUs[checkLang].email}:</span>
                    <p>
                      {" "}
                      <a href="#">{section[checkLang].email}</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7548.234799019207!2d72.824187!3d18.926197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e96d790c07%3A0x5240aee242919df5!2sMaharashtra%20Vidhan%20Bhavan!5e0!3m2!1sen!2sin!4v1707114796608!5m2!1sen!2sin"
        width={"100%"}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactUs;