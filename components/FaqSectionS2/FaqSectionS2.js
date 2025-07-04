import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import fImg1 from '/public/images/faq/faq-left.png'
import Image from 'next/image';

const FaqSectionS2 = (props) => {

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className="faq-section-s2 separator-padding"
            style={{ backgroundImage: `url(${'/images/faq/bg.jpg'})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="faq-img">
                            <div className="sball-1"></div>
                            <Image src={fImg1} alt="" />
                            <div className="sball-2"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-section-right">
                            <div className="heading-title-s3">
                                <small>You’ve have Any Questions?</small>
                                <h2>Frequently asked <span>questions</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="faq-item">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                    <AccordionSummary
                                                        expandIcon={""}
                                                        aria-controls="panel1bh-content"
                                                        id="panel1bh-header"
                                                    >
                                                        <Typography>Interdum et malesuada fames ac ante ipsum</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                                            consectetur ligula, eget egestas magna mi ut arcu. Phasellus
                                                            nec odio orci. Nunc id massa ante. Suspendisse sit amet
                                                            neque euismod, convallis quam eget, dignissim massa. Aliquam
                                                            blandit risus purus, in congue nunc venenatis id.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                    <AccordionSummary
                                                        expandIcon={""}
                                                        aria-controls="panel2bh-content"
                                                        id="panel2bh-header"
                                                    >
                                                        <Typography>Maecenas condimentum sollicitudin ligula,</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                                            consectetur ligula, eget egestas magna mi ut arcu. Phasellus
                                                            nec odio orci. Nunc id massa ante. Suspendisse sit amet
                                                            neque euismod, convallis quam eget, dignissim massa. Aliquam
                                                            blandit risus purus, in congue nunc venenatis id.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                                    <AccordionSummary
                                                        expandIcon={""}
                                                        aria-controls="panel3bh-content"
                                                        id="panel3bh-header"
                                                    >
                                                        <Typography>Duis rhoncus orci ut metus rhoncus</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                                            consectetur ligula, eget egestas magna mi ut arcu. Phasellus
                                                            nec odio orci. Nunc id massa ante. Suspendisse sit amet
                                                            neque euismod, convallis quam eget, dignissim massa. Aliquam
                                                            blandit risus purus, in congue nunc venenatis id.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                                    <AccordionSummary
                                                        expandIcon={""}
                                                        aria-controls="panel4bh-content"
                                                        id="panel4bh-header"
                                                    >
                                                        <Typography>Consectetur notted adipisicing</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                                            consectetur ligula, eget egestas magna mi ut arcu. Phasellus
                                                            nec odio orci. Nunc id massa ante. Suspendisse sit amet
                                                            neque euismod, convallis quam eget, dignissim massa. Aliquam
                                                            blandit risus purus, in congue nunc venenatis id.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                                    <AccordionSummary
                                                        expandIcon={""}
                                                        aria-controls="panel5bh-content"
                                                        id="panel5bh-header"
                                                    >
                                                        <Typography>What are the benefits of digital consulting?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                                            consectetur ligula, eget egestas magna mi ut arcu. Phasellus
                                                            nec odio orci. Nunc id massa ante. Suspendisse sit amet
                                                            neque euismod, convallis quam eget, dignissim massa. Aliquam
                                                            blandit risus purus, in congue nunc venenatis id.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSectionS2;
