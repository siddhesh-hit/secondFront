import { useState } from "react";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import useLang from "../hooks/useLang";
import { home, homeLink } from "../data/constant";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Homepage = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);
  const { lang, checkLang } = useLang();
  AOS.init();

  return (
    <div>
      <section className="homepageback">
        <h1 data-aos="fade-up"
          data-aos-duration="3000" style={{ whiteSpace: "pre-line" }}>{home[checkLang].header}</h1>
        <Row data-aos="fade-up"
          data-aos-duration="3000" className="form-controlss">
          <Col lg={6}>
            <ReactTransliterate
              renderComponent={(props) => <input className="form-control" {...props} />}
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
                      {item?.childtext && item?.childtext?.map((it, ind) => {
                        let bool
                        if (ind === item.childtext.length - 1) {
                          bool = true
                        }
                        else {
                          bool = false
                        }
                        return (
                          <Link to={it.link} key={ind}>
                            <>{it.name}</>
                            {bool ? <span></span> : <span>|</span>}
                          </Link>
                        )
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
          <h2>
            {home[checkLang].hometitle}
          </h2>
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
      <section className="importantlinks">
        <Container>
          <div className="aboutcontent">
            <h1>
              {homeLink[checkLang].title}
              <div className="hrline"></div>
            </h1>
          </div>
          <Row>
            <Col lg={3}>
              <div className="links">
                <Link to="http://mls.org.in/">http://mls.org.in/</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https:// gr.maharashtra.gov.in">https:// gr.maharashtra.gov.in</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https:// beams.mahakosh.gov.in">https:// beams.mahakosh.gov.in</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https:// directorate.marathi.gov.in">https:// directorate.marathi.gov.in</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https://eci.gov.in">https://eci.gov.in/</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="links">
                <Link to="https:// beams.mahakosh.gov.in">https:// beams.mahakosh.gov.in</Link>
              </div>
            </Col>
          </Row>
          <div className="readd">
            <Link className="readmore" to="/all-links">
              {homeLink[checkLang].button} <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
