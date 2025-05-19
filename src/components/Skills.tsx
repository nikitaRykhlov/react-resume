import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faDocker, faDev} from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Skills.scss';
import {Chip} from "./ui";
import {faLanguage, faList, faServer} from "@fortawesome/free-solid-svg-icons";

const Languages = [
    "English",
    "Russian",
];

const FrontEndSkills = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "WebSockets"
];

const BackEndSkills = [
    "Golang",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "S3",
    "MySQL",
    "WebSockets",
];

const DevOpsAndAutomation = [
    "Kubernetes",
    "Docker",
    "Helm",
    "GitLab CI/CD",
    "Jenkins"
]

const DevelopmentSkills = [
    "Software Architect",
    "Domain-Driven Design(DDD)",
    "Feature Sliced Design(FSD)",
    "Microservices",
    "Scalability",
    "High Availability",
    "Distributed Systems",
    "Test-Driven Development(TDD)",
    "Git",
    "GitLab",
    "GitHub"
];

const OtherSkills = [
    "Jira",
    "UML",
    "BPMN",
    "C4 Model",
    "Figma",
    "Postman"
];

function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faLanguage} size="3x"/>
                        <h3>Languages</h3>
                        <p>I use both English and Russian in my work.</p>
                        <p>I’m comfortable with professional communication, writing and reading technical documents,
                            participating in discussions, and preparing documentation.</p>
                        <div className="flex-chips">
                            {Languages.map((label, index) => (
                                <Chip key={index} label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x"/>
                        <h3>Back End Development</h3>
                        <p>I build reliable and high-performance backend systems for web applications. My experience
                            includes designing APIs, working with databases, and managing communication between frontend
                            and backend services. I focus on scalability, security, and efficient system
                            architecture.</p>
                        <div className="flex-chips">
                            {BackEndSkills.map((label, index) => (
                                <Chip key={index} label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Front End Development</h3>
                        <p>I specialize in building user interfaces for web applications. I focus on clean code
                            structure, responsive design, and a smooth user experience. I have experience implementing
                            complex frontend functionality and integrating with backend systems using modern
                            technologies.</p>
                        <div className="flex-chips">
                            {FrontEndSkills.map((label, index) => (
                                <Chip key={index} label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDev} size="3x"/>
                        <h3>Development</h3>
                        <p>Experienced in building and architecting complex software systems with a focus on
                            maintainability, scalability, and clean code practices. I approach development with an
                            emphasis on structured design, long-term project sustainability, and efficient team
                            collaboration.</p>
                        <div className="flex-chips">
                            {DevelopmentSkills.map((label, index) => (
                                <Chip key={index} label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>DevOps And Automation</h3>
                        <p>I have experience in building and maintaining CI/CD pipelines, containerizing applications,
                            and managing infrastructure with modern DevOps tools. I focus on automation, reliability,
                            and efficient deployment processes across development, testing, and production
                            environments.</p>
                        <div className="flex-chips">
                            {DevOpsAndAutomation.map((label, index) => (
                                <Chip key={index} label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faList} size="3x"/>
                        <h3>Other</h3>
                        <p>I have experience in project management, system modelling, and design collaboration. I
                            actively use tools for task tracking, architectural visualisation, process design, and API
                            testing. My skill set includes working with documentation, prototyping, and cross-team
                            coordination.</p>
                        <div className="flex-chips">
                            {OtherSkills.map((label, index) => (
                                <Chip key={index} label={label}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;