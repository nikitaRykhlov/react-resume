import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCertificate} from '@fortawesome/free-solid-svg-icons';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/LicencesAndCertifications.scss'
import PostgreSQL from "./certifications/PostgreSQL";
import Redis from "./certifications/Redis";
import Golang from "./certifications/Golang";

function LicencesAndCertifications() {
    return (
        <div id="lac">
            <div className="items-container">
                <h2>Licences & Certifications</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--lac"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="Issued Mar 2024"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faCertificate}/>}
                    >
                        <PostgreSQL/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--lac"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="Issued Jan 2024"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faCertificate}/>}
                    >
                        <Redis/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--lac"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="Issued May 2023"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faCertificate}/>}
                    >
                        <Golang/>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default LicencesAndCertifications;