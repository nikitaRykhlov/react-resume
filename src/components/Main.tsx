import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import {Chip} from "./ui";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

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
                        src="https://nikita-rykhlov.tech/photo.png"
                        alt="Avatar"
                    />
                </div>
                <div className="content">
                    <div className="social_icons">
                        <a href="https://www.linkedin.com/in/nikita-rykhlov/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className="social-icon"/>
                        </a>
                        <a href="https://github.com/nikitaRykhlov" target="_blank" rel="noreferrer">
                            <GitHubIcon className="social-icon"/>
                        </a>
                        <a href="https://t.me/nikitaRykhlov" target="_blank" rel="noreferrer">
                            <TelegramIcon className="social-icon"/>
                        </a>
                        <a href="https://wa.me/995599390961" target="_blank" rel="noreferrer">
                            <WhatsAppIcon className="social-icon"/>
                        </a>
                        <a href="https://www.facebook.com/nikitaRykhlovDev/" target="_blank" rel="noreferrer">
                            <FacebookIcon className="social-icon"/>
                        </a>
                        <a href="https://x.com/NikitaRykhlov" target="_blank" rel="noreferrer">
                            <XIcon className="social-icon"/>
                        </a>
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
                        <a href="https://www.linkedin.com/in/nikita-rykhlov/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className="social-icon"/>
                        </a>
                        <a href="https://github.com/nikitaRykhlov" target="_blank" rel="noreferrer">
                            <GitHubIcon className="social-icon"/>
                        </a>
                        <a href="https://t.me/nikitaRykhlov" target="_blank" rel="noreferrer">
                            <TelegramIcon className="social-icon"/>
                        </a>
                        <a href="https://wa.me/995599390961" target="_blank" rel="noreferrer">
                            <WhatsAppIcon className="social-icon"/>
                        </a>
                        <a href="https://www.facebook.com/nikitaRykhlovDev/" target="_blank" rel="noreferrer">
                            <FacebookIcon className="social-icon"/>
                        </a>
                        <a href="https://x.com/NikitaRykhlov" target="_blank" rel="noreferrer">
                            <XIcon className="social-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;