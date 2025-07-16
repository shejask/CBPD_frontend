import React from 'react'
import Link from 'next/link'

const PageTitle = (props) => {
    return (
        <section className="page-title"
            style={{ backgroundImage: `url(${props.Bg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ol>
                                <li><Link href="/home"><i className="icon-36"></i> Home</Link></li>
                                <li>{props.pagesub}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;