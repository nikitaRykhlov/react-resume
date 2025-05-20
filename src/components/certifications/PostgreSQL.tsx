import React from "react";
import '../../assets/styles/LicenceOrCertification.scss'
import {Chip} from "../ui";
import Button from "@mui/material/Button";
import OpenInNew from "@mui/icons-material/OpenInNew";


const skills = [
    "SQL",
    "PostgreSQL",
    "Database Design",
    "Software Development",
];

function PostgreSQL() {
    return (
        <div className="licence-or-certification">
            <h3 className="title">SQL and PostgreSQL: The Complete Developer's Guide</h3>
            <h5 className="issuer">Udemy</h5>

            <Button
                href={"https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/"}
                target="_brank"
                rel="noreferrer"
                color="inherit"
                startIcon={<OpenInNew/>}
            >Show Credential</Button>

            <p>Gained comprehensive skills in working with relational databases through hands-on learning of SQL and
                PostgreSQL. Mastered essential database operations including data storage and retrieval, query
                optimization, and efficient database design. This course provided a solid foundation in SQL
                programming, performance tuning, and best practices for building robust data-driven
                applications.</p>


            <div className="flex-skills">
                {skills.map((label, index) => (
                    <Chip key={index} variant="black" label={label}/>
                ))}
            </div>

        </div>
    );
}

export default PostgreSQL;