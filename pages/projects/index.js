import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import ProjectSection4 from '../../components/ProjectSection4/ProjectSection4';

const ProjectPage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Projects'} pagesub={'Projects'} Bg={'/images/page-title/bg-2.jpg'} />
                <div className="project-page">
                    <ProjectSection4/>
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ProjectPage;

