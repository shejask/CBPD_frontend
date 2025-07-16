import React from 'react'
import pImg1 from '/public/images/instagram/img-1.jpg'
import pImg2 from '/public/images/instagram/img-2.jpg'
import pImg3 from '/public/images/instagram/img-3.jpg'
import pImg4 from '/public/images/instagram/img-4.jpg'
import pImg5 from '/public/images/instagram/img-5.jpg'
import pImg6 from '/public/images/instagram/img-6.jpg'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const instagram = [
    {
        Pimg: pImg1,
    },
    {
        Pimg: pImg2,
    },
    {
        Pimg: pImg3,
    },
    {
        Pimg: pImg4,
    },
    {
        Pimg: pImg5,
    },
    {
        Pimg: pImg6,
    },

]


const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
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



const InstagramSection = (props) => {

    const [open, setOpen] = React.useState(false);

    return (
        <section className="instagram-section">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="instagram-container instagram-slider">
                            <Slider {...settings}>
                                {instagram.map((image, i) => (
                                    <div className="instagram-item" onClick={() => setOpen(true)} key={i}>
                                        <img src={image.Pimg} alt="" className="img img-responsive" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                ]}
            />
        </section>
    )
}

export default InstagramSection;