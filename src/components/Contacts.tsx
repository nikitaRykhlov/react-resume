import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Contacts.scss';
import CopyToClipboard from "./CopyToClipBoard";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

function Contacts() {
    const email = "nikita_rykhlov@outlook.com"

    return (
        <div className="container" id="contacts">
            <div className="items-container contacts-container">
                <h2>Contacts</h2>
                <div className="contacts-row">
                    <p><a href={`mailto:${email}`}>Email: {email}</a></p>
                    <CopyToClipboard content={email}/>
                </div>

                <div className="contacts-row">
                    <p><a href="https://wa.me/995599390961" target="_blank" rel="noreferrer">Phone Number: +995 599 390
                        961</a></p>
                    <CopyToClipboard content={"+995599390961"}/>
                </div>

                <div className="contacts-row">
                    <p>Time zone: UTC+04:00</p>
                </div>

                <div className="contacts-row">
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
    );
}

export default Contacts;