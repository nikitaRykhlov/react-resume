import React from "react";
import '@fortawesome/free-regular-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import '../../assets/styles/LicenceOrCertification.scss'
import {Chip} from "../ui";


const skills = [
    "SQL",
    "PostgreSQL",
    "Database Design",
    "Software Development",
];

function PostgreSQL() {
    return (
        <a href="https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/" target="_blank" rel="noreferrer">
            <div className="licence-or-certification">
                <h3 className="title">SQL and PostgreSQL: The Complete Developer's Guide</h3>
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

export default PostgreSQL;