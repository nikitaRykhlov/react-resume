import React from "react";
import '@fortawesome/free-regular-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import '../../assets/styles/LicenceOrCertification.scss'
import {Chip} from "../ui";


const skills = [
    "Golang",
    "Software Development",
    "Programming Languages"
];

function Golang() {
    return (
        <a href="https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/" target="_blank" rel="noreferrer">
            <div className="licence-or-certification">
                <h3 className="title">Go - The Complete Guide</h3>
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

export default Golang;