import React from 'react'

const MarqueeSection = (props) => {

    return (
        <div className="animate-marque-sec">
            <div className="animate-marque">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>
                                <span>Marketing.</span>
                                <span>Development.</span>
                                <span>Resources.</span>
                                <span>Marketing.</span>
                                <span>Development.</span>
                                <span>Resources.</span>
                                <span>Marketing.</span>
                                <span>Development.</span>
                                <span>Resources.</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-marque-s2">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>
                                <span>Management.</span>
                                <span>Digital.</span>
                                <span>Initiative.</span>
                                <span>WEb site.</span>
                                <span>Management.</span>
                                <span>WEb site.</span>
                                <span>Digital.</span>
                                <span>Initiative.</span>
                                <span>WEb site.</span>
                                <span>Management.</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeSection;