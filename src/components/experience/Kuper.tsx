import React from "react";
import '@fortawesome/free-regular-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import '../../assets/styles/ExperiencePosition.scss'
import Expandable from "../Expandable";
import {Chip} from "../ui";


const skills = [
    "Microservices",
    "PostgreSQL",
    "Kubernetes",
    "S3",
    "Redis",
    "Kafka",
    "Scalability",
    "Software Architecture",
    "gRPC",
    "Domain-Driven Design(DDD)",
    "Golang",
    "High Availability",
    "Distributed Systems",
    "Test-Driven Development(TDD)",
    "GitLab",
    "Jira",
];

function Kuper() {
    return (
        <div className="position">
            <h3 className="company-title">Kuper</h3>
            <h4 className="position-title">Senior Back End Developer</h4>
            <h5 className="location-title">Abu Dhabi, Abu Dhabi Emirate, United Arab Emirates - Remote</h5>

            <p className="list-title">Key Achievements:</p>
            <ul>
                <li>
                    Reduced deployment times by <span className="bold">34.5%</span> by extracting B2B logic into
                    microservices using Golang,
                    PostgreSQL, and Kafka.
                </li>
                <li>
                    Increased B2B sales volume by <span className="bold">427%</span> within six months by launching a
                    scalable wholesale orders
                    platform with Redis and S3.
                </li>
                <li>
                    Improved client retention by <span className="bold">21.8%</span> through a loyalty program with
                    tiered rewards and personalized
                    offers.
                </li>
                <li>
                    Decreased bug rates by <span className="bold">20.4%</span> by decoupling B2C/B2B workflows,
                    enhancing system modularity.
                </li>
                <li>
                    Maintained <span className="bold">99.9%</span> uptime via Kubernetes orchestration and proactive
                    monitoring.
                </li>
            </ul>

            <Expandable>
                <p className="list-title">Responsibilities:</p>
                <ul>
                    <li>
                        Extracted B2B logic from monolith to microservices, applying Domain-Driven Design (DDD)
                        principles
                        for scalability.
                    </li>
                    <li>
                        Designed and built a wholesale orders platform, integrating Redis for caching and S3 for
                        storage.
                    </li>
                    <li>
                        Developed a loyalty program with gRPC for inter-service communication and high availability.
                    </li>
                    <li>
                        Led efforts to separate B2C/B2B scenarios, streamlining business processes.
                    </li>
                    <li>
                        Conducted technical interviews, onboarded 5 specialists, and ensured SLAs through on-call
                        support.
                    </li>
                </ul>

                <p className="list-title">Technical Contributions:</p>
                <ul>
                    <li>
                        Implemented event-driven architectures using Kafka for real-time communication.
                    </li>
                    <li>
                        Utilized Kubernetes for container orchestration and fault tolerance.
                    </li>
                    <li>
                        Applied Test-Driven Development (TDD) practices to ensure code quality.
                    </li>
                    <li>
                        Managed CI/CD pipelines with GitLab and tracked tasks in Jira.
                    </li>
                </ul>

                <p className="list-title">Key Learnings:</p>
                <ul>
                    <li>
                        Mastered distributed systems and DDD principles for complex domains.
                    </li>
                    <li>
                        Enhanced communication skills to align technical solutions with business needs.
                    </li>
                    <li>
                        Balanced short-term goals with long-term architectural improvements.
                    </li>
                    <li>
                        Refined hiring practices to build cohesive, high-performing teams.
                    </li>
                </ul>

                <p><span className="bold">Team Size:</span> 5 people</p>

                <div className="flex-skills">
                    {skills.map((label, index) => (
                        <Chip key={index} variant="black" label={label}/>
                    ))}
                </div>
            </Expandable>
        </div>
    );
}

export default Kuper;