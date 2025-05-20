import React from "react";
import '../../assets/styles/LicenceOrCertification.scss'
import {Chip} from "../ui";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";


const skills = [
    "Redis",
    "Database Design",
];

function Redis() {
    return (
        <div className="licence-or-certification">
            <h3 className="title">Redis: The Complete Developer's Guide</h3>
            <h5 className="issuer">Udemy</h5>

            <Button
                href={"https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/"}
                target="_brank"
                rel="noreferrer"
                color="inherit"
                startIcon={<OpenInNew/>}
            >Show Credential</Button>

            <p>A comprehensive course covering Redis v7.0 from the ground up, with hands-on exercises and real-world use
                cases. Explored core and advanced topics including data structures, persistence, scripting with Lua,
                concurrency patterns, Redis Streams, and performance optimization. Gained practical experience working
                with Redis in modern application development.</p>

            <div className="flex-skills">
                {skills.map((label, index) => (
                    <Chip key={index} variant="black" label={label}/>
                ))}
            </div>
        </div>
    );
}

export default Redis;