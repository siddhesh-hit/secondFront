import { useState } from "react";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import useLang from "../hooks/useLang";
import { home, homeLink } from "../data/constant";

import one from "../assets/implink/1.jpeg"
import two from "../assets/implink/2.jpeg"
import three from "../assets/implink/3.jpeg"

const Homepage = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);
  const { lang, checkLang } = useLang();
  AOS.init();

  const handleLinkClick = (link) => {
    if (window.confirm("Are you sure you want to visit this link?") === true) {
      window.location.href = link;
    } else {
      return false
    }
  }
  return (
    <div>
      <section className="homepageback">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ whiteSpace: "pre-line" }}
        >
          {home[checkLang].header}
        </h1>
        <Row
          data-aos="fade-up"
          data-aos-duration="3000"
          className="form-controlss"
        >
          <Col lg={6}>
            <ReactTransliterate
              renderComponent={(props) => (
                <input className="form-control" {...props} />
              )}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={home[checkLang].searchPlaceHolder}
              onChangeText={(text) => {
                setSearch(text);
              }}
              lang="hi"
            />
            <Link to={`/SearchDetails?id=${search}`} className="searchh">
              <i className="fa fa-search"></i>
            </Link>
          </Col>
        </Row>
        <Row className="maincontent">
          <Col lg={9}>
            <Row>
              {home[checkLang].nav.map((item, index) => (
                <Col lg={4} key={index}>
                  <Row className="boxes">
                    <Col lg={3}>
                      <img src={item.icon} />
                    </Col>
                    <Col lg={9}>
                      <h6>{item.title}</h6>
                      {item?.childtext &&
                        item?.childtext?.map((it, ind) => {
                          let bool;
                          if (ind === item.childtext.length - 1) {
                            bool = true;
                          } else {
                            bool = false;
                          }
                          return (
                            <Link to={it.link} key={ind}>
                              <>{it.name}</>
                              {bool ? <span></span> : <span>|</span>}
                            </Link>
                          );
                        })}
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
      <section className="resourcesss">
        <Container>
          <h2>{home[checkLang].hometitle}</h2>
          <Row>
            {home[checkLang].homebottom.map((item, index) => (
              <Col lg={4} key={index}>
                <Row className="boxes1">
                  <Col lg={4}>
                    <img src={item.icon} />
                  </Col>
                  <Col lg={8}>
                    <h6>{item.title}</h6>
                    <p>{item.subtitle}</p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <h2>
        <Container className="pt-5 pb-5">
          <p className="demophase">{home[checkLang].hometitle1}</p>
        </Container>
      </h2>
      <section className="importantlinks pt-5">
        <Container>
          <div className="aboutcontent">
            <h1>
              {homeLink[checkLang].title}
              <div className="hrline"></div>
            </h1>
          </div>
          <Row>
            <Col lg={4}>
              <div className="links">
                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("http://mls.org.in/index.aspx")}><img src={one} /> http://mls.org.in</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="links">
                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://beams.mahakosh.gov.in")}><img src={two} /> https://beams.mahakosh.gov.in</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="links">
                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://www.eci.gov.in/")}><img src={three} /> https://www.eci.gov.in/</div>
              </div>
            </Col>
          </Row>
          <div className="readd">
            <Link className="readmore" to="/all-links">
              {homeLink[checkLang].button}{" "}
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
