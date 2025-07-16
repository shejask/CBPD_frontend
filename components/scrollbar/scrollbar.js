import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink href='#__next'><i className="icon-36"></i></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
