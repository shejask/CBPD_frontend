import React from 'react'
import CountUp from 'react-countup';

const funFact = [
    {
        title: '3',
        subTitle: 'Awesome Clients',
        Symbol: '+',
        numberSymbol: 'k',
    },
    {
        title: '120',
        subTitle: 'Client Projects',
        Symbol: '+',
    },
    {
        title: '5',
        subTitle: 'Successful Cases',
        Symbol: '+',
        numberSymbol: 'k',
    },

]


const FunFact = (props) => {
    return (
        <section className={`funfact-section separator-padding ${props.fClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 col-12">
                        <div className="heading-title">
                            <small>FunFact</small>
                            <h2>We Specialize Grow Up <span>business</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-12">
                        <div className="fun-fact-wrap">
                            {funFact.map((funfact, fitem) => (
                                <div className="info" key={fitem}>
                                    <h3><span><CountUp end={funfact.title} enableScrollSpy />{funfact.numberSymbol}</span><small>{funfact.Symbol}</small></h3>
                                    <p>{funfact.subTitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;