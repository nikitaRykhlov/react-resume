import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import {Chip} from "./ui";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LogoDev from "@mui/icons-material/LogoDev";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMedium} from "@fortawesome/free-brands-svg-icons";

const MainSkills = [
    "Software Architecture",
    "Golang",
    "Distributed Systems",
    "Kafka",
    "PostgreSQL",
]

function Main() {
    return (
        <div className="container">
            <div className="about-section">
                <div className="image-wrapper">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4E35AQGfth8as0oegw/profile-framedphoto-shrink_200_200/B4EZbOKJKyHwAk-/0/1747215488132?e=1748181600&v=beta&t=rWHzALraJX2GhbugXEFIrZsNePqGl14LNOO6Ck475nk"
                        alt="Avatar"/>
                </div>
                <div className="content">
                    <div className="social_icons">
                        <a href="https://github.com/nikitaRykhlov" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                        <a href="https://www.linkedin.com/in/nikita-rykhlov/" target="_blank"
                           rel="noreferrer"><LinkedInIcon/></a>
                        <a href="https://wa.me/995599390961" target="_blank" rel="noreferrer"><WhatsAppIcon
                            className="social-icon"/></a>
                        <a href="https://dev.to/nikita_rykhlov" target="_blank" rel="noreferrer"><LogoDev
                            className="social-icon"/></a>
                        <a href="https://medium.com/@nikita_rykhlov" target="_blank" rel="noreferrer"><FontAwesomeIcon
                            className="social-icon" icon={faMedium}/></a>
                    </div>
                    <h1>Nikita Rykhlov</h1>
                    <p className="current-position">Back End Developer</p>
                    <p className="current-position underline">5 years+</p>
                    <div className="flex-chips">
                        {MainSkills.map((label, index) => (
                            <Chip key={index} label={label}/>
                        ))}
                    </div>

                    <div className="mobile_social_icons">
                        <a href="https://github.com/nikitaRykhlov" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                        <a href="https://www.linkedin.com/in/nikita-rykhlov/" target="_blank"
                           rel="noreferrer"><LinkedInIcon/></a>
                        <a href="https://wa.me/995599390961" target="_blank" rel="noreferrer"><WhatsAppIcon
                            className="social-icon"/></a>
                        <a href="https://dev.to/nikita_rykhlov" target="_blank" rel="noreferrer"><LogoDev
                            className="social-icon"/></a>
                        <a href="https://medium.com/@nikita_rykhlov" target="_blank" rel="noreferrer"><FontAwesomeIcon
                            className="social-icon" icon={faMedium}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;