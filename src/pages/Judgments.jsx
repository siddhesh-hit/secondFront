import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  Offcanvas,
  Button,
} from "react-bootstrap";
import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";
import useLang from "../hooks/useLang";
import { judgment } from "../data/constant";
const Judgments = () => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isDivVisible1, setDivVisibility1] = useState(false);
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
                  <h3>Filters</h3>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Court</Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <div className="datacheck">
                            <label>विधानपरिषद</label>
                            <Form.Check
                              aria-label="option 1"
                              name="house"
                              value="विधानपरिषद"
                            />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Justice</Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <div className="datacheck">
                            <label>सर्व</label>
                            <Form.Check
                              aria-label="option 4"
                              name="session"
                              value="सर्व"
                            />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <hr />
                <div className="secondfilter">
                  <button
                    className="advanced"
                    onClick={() => setDivVisibility1(!isDivVisible1)}
                  >
                    Advanced फिल्टर
                    <div className="iconss">{isDivVisible1 ? "-" : "+"}</div>
                  </button>
                  {isDivVisible1 && (
                    <div className="advancdeee">
                      <select className="secondfilers" name="kramank">
                        <option hidden>क्रमांक निवडा</option>
                        <option>test</option>
                      </select>
                    </div>
                  )}
                </div>
                <div className="formbutton">
                  <button className="reset">Reset</button>
                  <button className="apply">Apply</button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={3} className="d-none d-lg-block">
            <div className="filters">
              <div className="firstfilter">
                <h3>Filters</h3>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Court</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>विधानपरिषद</label>
                          <Form.Check
                            aria-label="option 1"
                            name="house"
                            value="विधानपरिषद"
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Justice</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>सर्व</label>
                          <Form.Check
                            aria-label="option 4"
                            name="session"
                            value="सर्व"
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <hr />
              <div className="secondfilter">
                <button
                  className="advanced"
                  onClick={() => setDivVisibility1(!isDivVisible1)}
                >
                  Advanced Filter
                  <div className="iconss">{isDivVisible1 ? "-" : "+"}</div>
                </button>
                {isDivVisible1 && (
                  <div className="advancdeee">
                    <select className="secondfilers" name="kramank">
                      <option hidden>क्रमांक निवडा</option>
                      <option>test</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="formbutton">
                <button className="reset">Reset</button>
                <button className="apply">Apply</button>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="debate-search">
              <div className="searchboxx">
                <input
                  type="text"
                  name="topic"
                  placeholder={judgment[checkLang].searchtitle}
                  className="form-control"
                />
                <button className="searchb">
                  <i className="fa fa-search" />
                </button>
                <button className="startover">
                  {judgment[checkLang].reset}
                </button>
              </div>
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <span> {judgment[checkLang].home} </span>
                      <img src={Arrow} alt="" />
                      <span>{judgment[checkLang].title}</span>
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
              <h3>{judgment[checkLang].comingsoon}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Judgments;
