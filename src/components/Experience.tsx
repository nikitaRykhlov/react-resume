import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Experience.scss'
import Kuper from "./experience/Kuper";
import ELMA365 from "./experience/ELMA365";
import Rainbowsoft from "./experience/Rainbowsoft";

function Experience() {
    return (
        <div id="experience">
            <div className="items-container">
                <h2>Experience</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="Dec 2023 - Present"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <Kuper/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Nov 2022 - Dec 2023"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <ELMA365/>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Oct 2020 - Nov 2022"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <Rainbowsoft/>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;