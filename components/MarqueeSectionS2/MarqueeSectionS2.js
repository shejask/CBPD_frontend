import React from 'react'

const MarqueeSectionS2 = (props) => {

    return (
        <div className={`animate-marque-sec style-2 ${props.mClass}`}>
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
        </div>
    )
}

export default MarqueeSectionS2;