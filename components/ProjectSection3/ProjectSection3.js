import React from 'react'
import pImg1 from '/public/images/case/img-9.jpg'
import pImg2 from '/public/images/case/img-10.jpg'
import pImg3 from '/public/images/case/img-11.jpg'
import pImg4 from '/public/images/case/img-12.jpg'
import pImg5 from '/public/images/case/img-20.jpg'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image'

const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
]


const ProjectSection3 = (props) => {

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    const [open, setOpen] = React.useState(false);



    return (

        <section className="case-section-s4 separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="heading-title-s2 text-center">
                            <small>Case Studies</small>
                            <h2>Learn Something About Our <span>Case Studies</span></h2>
                        </div>
                    </div>
                </div>
                <div className="case-wrap">
                    <div className="case-right">
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3 }}>
                            <Masonry columnsCount={3} gutter="15px">
                                {images.map((image, i) => (
                                    <div className="case-item" key={i}>
                                        <div className="case-img">
                                            <Image src={image} alt="" className="img img-responsive" />
                                            <i className="icon-17" onClick={() => setOpen(true)}></i>
                                        </div>
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
            />
        </section>
    )
}

export default ProjectSection3;