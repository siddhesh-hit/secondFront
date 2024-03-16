import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageUrl, getApi } from "../services/axiosInterceptors";
import { Link } from "react-router-dom";
import Arrow from "../assets/debate/arrow.svg";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "./common/Loader";
const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true, // Enable auto rotation
    autoplaySpeed: 3000, // Set rotation speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const fetchData = async () => {
    await getApi("gallery")
      .then((res) => {
        setGallery(res.data.data);
      })
      .catch((err) => console.log(err)).finally(() => setLoading(false));
  };
  // console.log(gallery);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="galleryback">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="breadcumbsss">
              <div className="countdebate">
                <Link to="/">
                  <span> Home</span>
                </Link>
                <img src={Arrow} alt="" />
                <span>Gallery</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="aboutcontent">
        <h1>
          Gallery
          <div className="hrline"></div>
        </h1>
      </div>
      <Container>
        <Slider {...settings}>
          {gallery?.length > 0 &&
            gallery.map((section, index) => (
              <div className="gallery_imagess" key={index}>
                {section["filename"].endsWith(".mp4") ? (
                  <video muted controls style={{ width: '100%' }} src={ImageUrl + section["destination"] + "/" + section["filename"]}></video>
                ) : (
                  <img src={ImageUrl + section["destination"] + "/" + section["filename"]} className="w-100" alt="about" />
                )}
              </div>
            ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Gallery;
