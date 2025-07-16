import React from 'react';
import Projects from '../../api/project'
import Link  from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image';


const ProjectSection4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [open, setOpen] = React.useState(false);

    return (
        <section className="case-section-s3 separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="heading-title-s2 text-center">
                            <small>Case Studies</small>
                            <h2>Learn Something About Our <span>Case Studies</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12 sortable-gallery">
                        <div className="case-container case-fancybox masonry-gallery row">
                            {Projects.slice(0, 6).map((project, index) => (
                                <div className="col-lg-6 col-md-6 col-12 custom-grid" key={index}>
                                    <div className="case-item">
                                        <div className="case-img">
                                            <Image src={project.psImg} alt="" className="img img-responsive" />
                                            <i className="icon-17" onClick={() => setOpen(true)}></i>
                                        </div>
                                        <div className="case-text">
                                            <span>{project.subTitle}</span>
                                            <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                            <p>Global Business Head of consultees. Leads the global expansion of the consultees brand and overseas investment in solutions and innovation.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: '/images/case/img-16.jpg' },
                    { src: '/images/case/img-14.jpg' },
                    { src: '/images/case/img-15.jpg' },
                    { src: '/images/case/img-17.jpg' },
                    { src: '/images/case/img-18.jpg' },
                    { src: '/images/case/img-19.jpg' },
                ]}
            />
        </section>
    );
}

export default ProjectSection4;