import React from 'react'
import pImg1 from '/public/images/case/img-6.jpg'
import pImg2 from '/public/images/case/img-7.jpg'
import pImg3 from '/public/images/case/img-8.jpg'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import cimg from '/public/images/case/bottom-shape.png'
import Link from 'next/link'
import Image from 'next/image';

const images = [
    pImg1,
    pImg2,
    pImg3,
]


const ProjectSection2 = (props) => {

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


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <section className="case-section-s2">
            <div className="case-wrap">
                <div className="case-left-wrap">
                    <div className="case-left" style={{ backgroundImage: `url(${'/images/case/left-bg.png'})` }}>
                        <div className="case-left-text">
                            <div className="heading-title">
                                {/* <small>Case Studies</small> */}
                                <h2>CBPD Accreditation for training and events  </h2>
                            </div>
                            <div className="funfact">
                                <small>Years Working Experience</small>
                                <h2><span className="odometer" data-count="10">10</span>+</h2>
                            </div>
                            <p>Central Board of Professional Development (CBPD) offers a diverse range of courses across multiple disciplines, developed and delivered 
                                through well-structured partnerships with accredited education providers. Course 
                                allocation is determined based on institutional requirements and the availability 
                                of necessary infrastructure. Each program is expertly designed to match students’ 
                                learning capacity, emphasizing holistic development through soft skills and personality
                                 enhancement—allowing learners to progress at their own pace</p>
                         </div>
                        <div className="bottom-shape">
                            <Image src={cimg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="case-right">
                    {images.map((image, i) => (
                        <div className="case-right-item" key={i}>
                            <Image src={image} alt="" className="img img-responsive" />
                            <i className="icon-17" onClick={() => setOpen(true)}></i>
                        </div>
                    ))}
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

export default ProjectSection2;