import React, { useState } from 'react';
import Projects from '../../api/project'
import Link  from "next/link";
import Image from 'next/image';



const ProjectSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="case-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-5 col-12">
                        <div className="heading-title-s2">
                            <small>Case Studies</small>
                            <h2>Learn Something About Our <span>Case Studies</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 col-12">
                        <div className="case-left-image-wrap">
                            <div className="case-left-image-group">
                                {Projects.map((item, index) => (
                                    <div key={index} className={`img-item ${activeIndex === index ? 'active' : ''}`}>
                                        <Image src={item.pImg} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-12">
                        <div className="case-right-items">
                            {Projects.slice(0,5).map((project, index) => (
                                <div
                                    key={index}
                                    className={`item ${activeIndex === index ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className="item-left">
                                        <span>{project.subTitle}</span>
                                        <h2>{project.title}</h2>
                                    </div>
                                    <Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}><i className="icon-45"></i></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;