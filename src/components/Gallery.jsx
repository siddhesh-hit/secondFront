
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageUrl, getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";
const Gallery = () => {
    const [newData, setNewData] = useState({});
    const { lang, checkLang } = useLang();
    const [gallery, setGallery] = useState([]);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const fetchData = async () => {
        await getApi("gallery")
            .then((res) => {
                setGallery(res.data.data);
            })
            .catch((err) => console.log(err));
    };
    console.log(gallery);

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        gallery?.length > 0 && gallery.map((section, index) => (
                            <div key={index}>
                                <img src={ImageUrl + section["destination"] + "/" + section["filename"]} className="w-100" alt="about" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Gallery
