import React from 'react'
import Link from 'next/link'
import Team from '../../api/team'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {

    return (
        <section className="team-section separator-padding">
            <div className="container">
                <div className="team-wrap">
                    <div className="row">
                        {Team.map((team, aitem) => (
                            <div className="col-lg-4 col-sm-6 col-12" key={aitem}>
                                <div className="team-item">
                                    <div className="team-img">
                                        <Image src={team.tImg} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                        <span>{team.title}</span>
                                    </div>
                                    <div className="right-title">
                                        <h3>{team.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSectionS2;