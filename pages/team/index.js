import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'

const TeamPage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Team'} pagesub={'Team'} Bg={'/images/page-title/bg-4.jpg'} />
                <div className="team-page">
                    <TeamSectionS2 />
                </div>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default TeamPage;
