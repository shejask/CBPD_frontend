import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ProjectPageS4 = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Projects'} pagesub={'Projects'} Bg={'/images/page-title/bg-2.jpg'} />
                <div className="project-page">
                    <ProjectSection3/>
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ProjectPageS4;

