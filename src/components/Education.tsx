import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'
import SSTU from "./education/SSTU"

function Education() {
    return (
        <div id="education">
            <div className="items-container">
                <h2>Education</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="Sep 2016 - Jun 2020"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faUserGraduate}/>}
                    >
                        <SSTU/>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Education;