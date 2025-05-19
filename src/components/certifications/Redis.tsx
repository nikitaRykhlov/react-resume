import React from "react";
import '@fortawesome/free-regular-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import '../../assets/styles/LicenceOrCertification.scss'
import {Chip} from "../ui";


const skills = [
    "Redis",
    "Database Design",
];

function Redis() {
    return (
        <a href="https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/" target="_blank" rel="noreferrer">
        <div className="licence-or-certification">
            <h3 className="title">Redis: The Complete Developer's Guide</h3>
            <h5 className="issuer">Udemy</h5>

            <div className="flex-skills">
                {skills.map((label, index) => (
                    <Chip key={index} variant="black" label={label}/>
                ))}
            </div>
        </div>

        </a>
    );
}

export default Redis;