import React from 'react'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

export default function Skg() {
    window.scrollTo(0, 0)
    return (
        <div className="skg-event">
            <Fade top>
                <p className="text-center text">SKG Event Management</p>
            </Fade>
            <Fade bottom>
                <p className="pg container">Skg Event Management is a committed and well known event management company in bhopal,our team of professionals having expertise
                    in handling fashion show, designer shows, Line Production & Management, live concerts, Theme Based Parties, Page 3 Parties, Destination Weddings,
                    New Year Eve Party( Red Velvet ) & Holi Event( Rang Barse ) has been the benchmark event of us bhopal.  </p>
            </Fade>
            <Fade bottom>
                <p className="pg container">We are  agroeth oriented professional Event management company with all the Innovtive concepts, possitive approach, work ethics and integrity, with
                    the use of latest  technology, & creativity. We organize and manage events that are not only free of errors but also in line with your organization
                    and the way it should be represented, our work is dedicated to the prosperity of our clients.
                </p>
            </Fade>
            <Pulse><h3 className="text-golden container text-center">We organized many fashion shows including Darshana Fashion Week & Mr & Miss Madhya Pradesh under MP's Got Talent.</h3>
            </Pulse>
        </div>
    )
}
