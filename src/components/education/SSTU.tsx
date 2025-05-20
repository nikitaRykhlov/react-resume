import React from "react";
import '../../assets/styles/EducationSchool.scss'
import {Chip} from "../ui";


const skills = [
    "Information Security",
    "Network Security",
    "Golang",
    "Algorithms",
    "Data Structures",
];

function SSTU() {
    return (
        <div className="education">
            <h3 className="field-of-study-title">Computer and Information Systems Security/Information Assurance</h3>
            <h5 className="school-title">Saratov State Technical University</h5>

            <div className="flex-skills">
                {skills.map((label, index) => (
                    <Chip key={index} variant="black" label={label}/>
                ))}
            </div>
        </div>
    );
}

export default SSTU;