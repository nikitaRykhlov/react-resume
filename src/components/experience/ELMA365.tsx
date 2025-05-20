import React from "react";
import '../../assets/styles/ExperiencePosition.scss'
import Expandable from "../Expandable";
import {Chip} from "../ui";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";


const skills = [
    "Golang",
    "Kubernetes",
    "Angular",
    "Distributed Systems",
    "High Availability",
    "Scalability",
    "Microservices",
    "S3",
    "Redis",
    "Test-Driven Development(TDD)",
    "GitLab",
];

function ELMA365() {
    return (
        <div className="position">
            <h3 className="company-title">ELMA365</h3>
            <h4 className="position-title">Senior Full Stack Developer</h4>
            <h5 className="location-title">Abu Dhabi, Abu Dhabi Emirate, United Arab Emirates - Remote</h5>

            <Button
                href={"https://www.linkedin.com/company/elmabpm/"}
                target="_brank"
                rel="noreferrer"
                color="inherit"
                startIcon={<LinkedIn/>}
            >LinkedIn</Button>

            <p className="list-title">Key Achievements:</p>
            <ul>
                <li>
                    Reduced document generation time by <span className="bold">25.5%</span>, improving operational
                    efficiency.
                </li>
                <li>
                    Achieved <span className="bold">97%</span> test coverage, reducing runtime errors and enhancing
                    stability.
                </li>
                <li>
                    Enabled seamless scalability to handle growing workloads with high availability.
                </li>
                <li>
                    Delivered an intuitive Angular-based UI, praised for responsiveness and usability.
                </li>
                <li>
                    Automated document management processes, addressing critical business needs.
                </li>
            </ul>

            <Expandable>
                <p className="list-title">Responsibilities:</p>
                <ul>
                    <li>
                        Designed and built a document templating platform using Golang, Angular, and microservices
                        architecture.
                    </li>
                    <li>
                        Optimized workflows by identifying bottlenecks and implementing performance improvements.
                    </li>
                    <li>
                        Ensured code quality through TDD, covering unit, integration, and end-to-end tests.
                    </li>
                    <li>
                        Developed a user-friendly UI/UX with smooth backend integration for optimal interactions.
                    </li>
                    <li>
                        Collaborated with a six-person team to deliver scalable, reliable solutions.
                    </li>
                    <li>
                        Mentored junior developers, conducted code reviews, and promoted best practices.
                    </li>
                </ul>

                <p className="list-title">Technical Contributions:</p>
                <ul>
                    <li>
                        Implemented Kubernetes for container orchestration, ensuring fault tolerance and
                        scalability.
                    </li>
                    <li>
                        Integrated Redis for caching and S3 for storage, boosting system performance.
                    </li>
                    <li>
                        Applied TDD principles to minimize technical debt and ensure maintainability.
                    </li>
                    <li>
                        Used GitLab for CI/CD pipelines, streamlining development and deployment.
                    </li>
                </ul>

                <p className="list-title">Key Learnings:</p>
                <ul>
                    <li>
                        Mastered scalable microservices design using Golang, Kubernetes, and distributed systems.
                    </li>
                    <li>
                        Improved full-stack development skills to create cohesive, user-focused solutions.
                    </li>
                    <li>
                        Recognized the value of TDD in maintaining code quality and reducing errors.
                    </li>
                    <li>
                        Enhanced collaboration skills within cross-functional teams for timely project delivery.
                    </li>
                    <li>
                        Gained expertise in workflow optimization and leveraging caching mechanisms like Redis.
                    </li>
                </ul>

                <p><span className="bold">Team Size:</span> 6 people</p>

                <div className="flex-skills">
                    {skills.map((label, index) => (
                        <Chip key={index} variant="black" label={label}/>
                    ))}
                </div>
            </Expandable>
        </div>
    );
}

export default ELMA365;