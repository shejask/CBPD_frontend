import React from 'react'
import abimg from '/public/images/graph/1.jpg'
import abimg2 from '/public/images/graph/Bar-Chart-Vertical.png'
import Image from 'next/image'


const GraphSection = (props) => {

    return (
        <section className="graph-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="graph-left-img">
                            <Image src={abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="graph-text">
                            <div className="heading-title">
                                <small>Business Graph</small>
                                <h2>The right skillset to improve your <span>company brand</span></h2>
                                <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget
                                    egestas magna mi ut arcu. Phasellus.</p>
                            </div>
                            <div className="grap-img">
                                <Image src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GraphSection;