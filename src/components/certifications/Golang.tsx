import React from "react";
import '../../assets/styles/LicenceOrCertification.scss'
import {Chip} from "../ui";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";


const skills = [
    "Golang",
    "Software Development",
    "Programming Languages"
];

function Golang() {
    return (
        <div className="licence-or-certification">
            <h3 className="title">Go - The Complete Guide</h3>
            <h5 className="issuer">Udemy</h5>

            <Button
                href={"https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/"}
                target="_brank"
                rel="noreferrer"
                color="inherit"
                startIcon={<OpenInNew/>}
            >Show Credential</Button>

            <p>A comprehensive course covering the Go (Golang) programming language from the ground up. Gained
                in-depth knowledge by building multiple hands-on projects, including a fully functional REST API.
                Covered core and advanced topics such as goroutines, channels, packages, testing, data marshaling,
                and best practices for developing high-performance, concurrent applications.</p>

            <div className="flex-skills">
                {skills.map((label, index) => (
                    <Chip key={index} variant="black" label={label}/>
                ))}
            </div>
        </div>
    );
}

export default Golang;