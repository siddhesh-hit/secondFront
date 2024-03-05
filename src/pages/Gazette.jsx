import { useState } from "react";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import useLang from "../hooks/useLang";
import { gazetteess } from "../data/constant";

const Gazette = () => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const { checkLang } = useLang();
  return (
    <div>
      <Container fluid className="debatepage">
        <Row>
          <Col lg={3} className="d-lg-none mb-3">
            <Button onClick={() => setDivVisibility(true)}>
              <i className="fa fa-bars mx-1"></i> फिल्टर उघडा
            </Button>
          </Col>
          <Offcanvas
            className="filtermobile"
            show={isDivVisible}
            onHide={() => setDivVisibility(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>फिल्टर</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="filters">
                <div className="firstfilter">
                  <h3>{gazetteess[checkLang].filter}</h3>
                  <select className="secondfilers mb-3" name="kramank">
                    <option hidden>भाग</option>
                    <option>test</option>
                  </select>
                  <select className="secondfilers mb-3" name="kramank">
                    <option hidden>विषय</option>
                    <option>test</option>
                  </select>
                  <select className="secondfilers mb-5" name="kramank">
                    <option hidden>विभाग</option>
                    <option>test</option>
                  </select>
                </div>
                <div className="formbutton">
                  <button className="reset">
                    {gazetteess[checkLang].reset}
                  </button>
                  <button className="apply">
                    {gazetteess[checkLang].apply}
                  </button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={3} className="d-none d-lg-block">
            <div className="filters">
              <div className="firstfilter">
                <h3>{gazetteess[checkLang].filter}</h3>
                <select className="secondfilers mb-3" name="kramank">
                  <option hidden>भाग</option>
                  <option>test</option>
                </select>
                <select className="secondfilers mb-3" name="kramank">
                  <option hidden>विषय</option>
                  <option>test</option>
                </select>
                <select className="secondfilers mb-5" name="kramank">
                  <option hidden>विभाग</option>
                  <option>test</option>
                </select>
              </div>
              <div className="formbutton">
                <button className="reset">{gazetteess[checkLang].reset}</button>
                <button className="apply">{gazetteess[checkLang].apply}</button>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="debate-search">
              <div className="searchboxx">
                <input
                  type="text"
                  name="topic"
                  placeholder={gazetteess[checkLang].searchtitle}
                  className="form-control"
                />
                <button className="searchb">
                  <i className="fa fa-search" />
                </button>
                <button className="startover">
                  {gazetteess[checkLang].reset}
                </button>
              </div>
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <span> {gazetteess[checkLang].home}</span>
                      <img src={Arrow} alt="" />
                      <span>{gazetteess[checkLang].title}</span>
                    </div>
                    <p>[0 परिणाम]</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="debate-right">
                    <select name="sabhaselection">
                      <option value={10}>10 प्रति पृष्ठ</option>
                      <option value={20}>20 प्रति पृष्ठ</option>
                      <option value={30}>30 प्रति पृष्ठ</option>
                      <option value={40}>40 प्रति पृष्ठ</option>
                    </select>
                    <span className="sorting">
                      <button>
                        <img src={Sort} alt="" />
                      </button>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="comingsoon">
              <h3>{gazetteess[checkLang].comingsoon}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gazette;
