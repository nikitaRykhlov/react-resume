import React from "react";
import '@fortawesome/free-regular-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import '../../assets/styles/ExperiencePosition.scss'
import Expandable from "../Expandable";
import {Chip} from "../ui";


const skills = [
    "Golang",
    "gRPC",
    "Jenkins",
    "MySQL",
    "Unified Modeling Language (UML)",
    "BPMN",
    "WebSockets",
    "React.js",
    "Docker",
    "PHP",
    "Full Stack Development",
    "Web Technologies",
];

function Rainbowsoft() {
    return (
        <div className="position">
            <h3 className="company-title">Rainbowsoft</h3>
            <h4 className="position-title">Middle Full Stack Developer</h4>
            <h5 className="location-title">Tbilisi, Georgia - Remote</h5>

            <p className="list-title">Key Achievements:</p>
            <ul>
                <li>
                    Developed an SDK for microcomponent management, enabling seamless integration into robotics
                    projects.
                </li>
                <li>
                    Built a remote control system using Golang, WebSockets, and React.js, improving device management
                    efficiency.
                </li>
                <li>
                    Simplified deployment with Docker, reducing maintenance complexity.
                </li>
                <li>
                    Contributed to the SPECTR Traffic Rules system, enhancing its usability for teaching traffic rules.
                </li>
                <li>
                    Optimized RepkaPi setup by testing OS options and selecting optimal software.
                </li>
            </ul>

            <Expandable>
                <p className="list-title">Responsibilities:</p>
                <ul>
                    <li>
                        Designed and implemented an SDK for microcomponents using Golang and gRPC.
                    </li>
                    <li>
                        Developed server-side RC system with Golang, WebSockets, and Docker for scalability.
                    </li>
                    <li>
                        Built client-side RC interface with React.js, ensuring intuitive user interactions.
                    </li>
                    <li>
                        Tested operating systems and configured software for RepkaPi single-board computer.
                    </li>
                    <li>
                        Contributed to SPECTR Traffic Rules system, handling database design and logic with PHP and
                        MySQL.
                    </li>
                </ul>

                <p className="list-title">Technical Contributions:</p>
                <ul>
                    <li>
                        Integrated gRPC for efficient communication between components.
                    </li>
                    <li>
                        Used Docker to streamline deployment and scaling processes.
                    </li>
                    <li>
                        Applied WebSockets for real-time device control in RC system.
                    </li>
                    <li>
                        Utilized Jenkins for CI/CD pipelines, ensuring smooth workflows.
                    </li>
                    <li>
                        Modeled architecture with UML and BPMN for clarity and alignment.
                    </li>
                </ul>

                <p className="list-title">Key Learnings:</p>
                <ul>
                    <li>
                        Mastered microcomponent integration and hardware-software interaction.
                    </li>
                    <li>
                        Gained expertise in Docker for simplifying deployment and scaling.
                    </li>
                    <li>
                        Learned gRPC, WebSockets, and cgo for high-performance solutions.
                    </li>
                    <li>
                        Improved full-stack skills, combining Golang, PHP, and React.js effectively.
                    </li>
                    <li>
                        Recognized the value of thorough testing and software selection for hardware projects.
                    </li>
                </ul>

                <p><span className="bold">Team Size:</span> 8 people</p>

                <div className="flex-skills">
                    {skills.map((label, index) => (
                        <Chip key={index} variant="black" label={label}/>
                    ))}
                </div>
            </Expandable>
        </div>
    );
}

export default Rainbowsoft;