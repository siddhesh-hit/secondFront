import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import libanner from "../assets/library/library.png";
import samplePDF1 from "../assets/Documents/02- Library Collection.pdf";
import samplePDF2 from "../assets/Documents/03- Library Work.pdf";
import samplePDF3 from "../assets/Documents/04- Library Software.pdf";
import samplePDF4 from "../assets/Documents/05- Library Committee.pdf";
import samplePDF5 from "../assets/Documents/06- Library Rules.pdf";
import samplePDF6 from "../assets/Documents/Library Contact.pdf";
import useLang from "../hooks/useLang";
import { getApi } from "../services/axiosInterceptors";
import { library } from "../data/constant";
const Library = () => {
    const [newData, setNewData] = useState({});
    const { lang, checkLang } = useLang();

    const fetchData = async () => {
        try {
            const res = await getApi(`library?isActive=${true}`);
            setNewData(res.data.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="librarypage">
            <Container fluid style={{ padding: '0px' }}>
                <div className="librarybanner">
                    <img src={libanner} className="w-100" alt="library" />
                </div>
            </Container>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="librarysidebar">
                            <h3>{library[checkLang].title}</h3>
                            <ul>
                                <a href={samplePDF1} target="_blank" rel="noreferrer"><li>{library[checkLang].title1}<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href={samplePDF2} target="_blank" rel="noreferrer"><li>{library[checkLang].title2}<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href={samplePDF3} target="_blank" rel="noreferrer"><li>{library[checkLang].title3}<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href={samplePDF4} target="_blank" rel="noreferrer"><li>{library[checkLang].title4}<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href={samplePDF5} target="_blank" rel="noreferrer"><li>{library[checkLang].title5}<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href={samplePDF6} target="_blank" rel="noreferrer"><li>{library[checkLang].title6}<i className="fa fa-chevron-right icon-calender"></i></li></a>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="librarycontent">
                            <h1>{library[checkLang].title}</h1>
                            <hr />
                            <p className="library" dangerouslySetInnerHTML={{ __html: newData[checkLang]?.description }} ></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Library;